const { api } = require('./api');
const {
  omdbSearchEndpoint,
  omdbMovieEndpoint,
  omdbMovieCount,
} = require('../config');
const { insertMovies, getMovieCount, emptyTable } = require('./database');

const getMovies = async (page = 1) => {
  return await api({ url: omdbSearchEndpoint(page) });
};

const getMovie = async (id) => {
  return await api({ url: omdbMovieEndpoint(id) });
};

const getAllMovieDetails = async () => {
  const promises = [];
  const _search = [];
  let page = 1;

  const { Search, totalResults } = await getMovies(page);

  _search.push(...Search);

  while (_search.length < Number(totalResults)) {
    page++;

    const x = await getMovies(page);

    _search.push(...x.Search);
  }

  for (let i = 0; i < _search.length; i++)
    promises.push(getMovie(_search[i].imdbID));

  return await Promise.all(promises);
};

const populateDatabase = async () => {
  const data = [];

  const movieCount = Number(await getMovieCount());

  if (movieCount === omdbMovieCount) return;

  if (movieCount < omdbMovieCount) await emptyTable();

  const movies = await getAllMovieDetails();

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    data.push([movie.Title, movie.Director, movie.Plot, movie.Poster]);
  }

  await insertMovies(data);
};

module.exports = { populateDatabase };
