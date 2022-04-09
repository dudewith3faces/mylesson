const koa = require('koa');
const { PORT } = require('./config');
const { errorMiddleware } = require('./middleware');
const { routes } = require('./route');
const { populateDatabase } = require('./services');

populateDatabase();

const app = new koa();

app.use(errorMiddleware).use(routes);

app.listen(PORT);
