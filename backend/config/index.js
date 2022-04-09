require('dotenv').config();

const PORT = isNaN(process.env.PORT) ? 50000 : Number(process.env.PORT);

module.exports = { PORT };
