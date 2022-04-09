const koa = require('koa');
const { PORT } = require('./config');
const { routes } = require('./route');

const app = new koa();

app.use(routes);

app.listen(PORT);
