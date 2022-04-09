const koa = require('koa');
const { PORT } = require('./config');

const app = new koa();

app.listen(PORT);
