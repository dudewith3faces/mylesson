require('dotenv').config();

const PORT = 50000;

const databaseConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  max: 1,
  ssl: false,
};

const omdbQuery = process.env.OMDB_QUERY ?? 'space';
const omdbYear = process.env.OMDB_YEAR ?? '2001';
const omdbApiKey = process.env.OMDB_API_KEY;

if (!omdbApiKey) throw new Error('Provide OMDB Api Key');

const omdbEndpoint = `http://www.omdbapi.com/?apikey=${omdbApiKey}&`;

const omdbSearchEndpoint = (page = 1) =>
  `${omdbEndpoint}s=${omdbQuery}&y=${omdbYear}&page=${page}`;
const omdbMovieEndpoint = (id) => `${omdbEndpoint}i=${id}&plot=full`;

const elasticSearchConnectionDetails = process.env.ELASTIC_SEARCH_CONNECTION;

const omdbMovieCount = 21;

// http://www.omdbapi.com/?t=space&y=2001

// http://www.omdbapi.com/?i=tt0275848&plot=full

// http://www.omdbapi.com/?s=space&y=2001&type=movie&plot=full

module.exports = {
  PORT,
  databaseConfig,
  omdbSearchEndpoint,
  omdbMovieEndpoint,
  omdbMovieCount,
  elasticSearchConnectionDetails,
};
