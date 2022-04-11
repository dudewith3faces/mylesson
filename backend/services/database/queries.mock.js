const { omdbMovieCount } = require('../../config');

const getMovies = async () => {
  return [
    {
      id: 1,
      title: 'Lloyd in Space',
      director: 'N/A',
      plot: 'A Disney show centered around Lloyd, an alien, living in space and going through "ordinary" life with family and friends as a 12 year old.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BZTg0ZWQxNjctOGI3Ny00NmUxLWI1OGUtNzU1ZmFlMTlmMDA1XkEyXkFqcGdeQXVyODA4OTIyMzY@._V1_SX300.jpg',
    },
  ];
};

const insertMovies = async (data) => {
  return;
};

const getMovieCount = async () => {
  return omdbMovieCount;
};

const emptyTable = async () => {
  return;
};

module.exports = { getMovies, insertMovies, getMovieCount, emptyTable };
