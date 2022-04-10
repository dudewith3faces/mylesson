const router = require('@koa/router')();
const { queryMovies } = require('../controller');

router.get('/', queryMovies);

module.exports = { routes: router.routes() };
