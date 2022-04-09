require('dotenv').config();

const PORT = isNaN(process.env.PORT) ? 50000 : Number(process.env.PORT);

const databaseConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  max: 1,
  ssl: false,
};

module.exports = { PORT, databaseConfig };
