const { Pool } = require('pg');
const { databaseConfig } = require('../../config');

const pool = new Pool(databaseConfig);

const selectAll = async (sql, args) => {
  return (await pool.query(sql, args)).rows;
};

module.exports = { selectAll };
