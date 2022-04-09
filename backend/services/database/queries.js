const { selectAll } = require('./pool');

const searchMovies = (query) => {
    const sql = `SELECT * FROM Movies WHERE 'aaaaaaaa' LIKE '%' || $1 || '%'`;

    return await selectAll(sql, [query]);
};

module.exports = { searchMovies }
