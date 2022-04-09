const { selectAll } = require('./pool');

const searchMovies = async (query) => {
  const sql = `SELECT * FROM "public"."Movies"`;

  return await selectAll(sql);
};

module.exports = { searchMovies };
