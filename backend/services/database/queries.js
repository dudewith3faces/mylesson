const { selectAll } = require('./pool');

const searchMovies = (query) => {
    const sql = ``;

    return await selectAll(sql, [query]);
};

module.exports = { searchMovies }
