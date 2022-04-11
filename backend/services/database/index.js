const queries = require('./queries');
const queriesMock = require('./queries.mock');

module.exports = process.env.NODE_ENV === 'test' ? queriesMock : queries;
