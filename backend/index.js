const koa = require('koa');
const { PORT } = require('./config');
const { middlewares } = require('./middleware');
const { routes } = require('./route');
const { populateDatabase } = require('./services');

populateDatabase();

const app = new koa();

app.use(middlewares).use(routes);

app.listen(PORT);
