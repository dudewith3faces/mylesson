const koa = require('koa');
const { middlewares } = require('./middleware');
const { routes } = require('./route');

const app = new koa();

app.use(middlewares).use(routes);

module.exports = { app };
