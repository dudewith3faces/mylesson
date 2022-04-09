const { query } = require('./pool');
const format = require('pg-format');

const tableName = `"public"."Movies"`;

const searchMovies = async (query) => {
  const sql = `SELECT * FROM ${tableName}`;

  return await query(sql);
};

const insertMovies = async (data) => {
  const sql = format(
    `INSERT INTO ${tableName} (title, director, plot, poster) values %L`,
    data
  );

  await query(sql);

  return;
};

const getMovieCount = async () => {
  return (await query(`SELECT COUNT(id) as count FROM ${tableName}`))[0].count;
};

const emptyTable = async () => {
  await query(`DELETE FROM ${tableName}`);
  return;
};

module.exports = { searchMovies, insertMovies, getMovieCount, emptyTable };
