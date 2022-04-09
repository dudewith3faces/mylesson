const router = require('@koa/router')();

router.get('/', (ctx, next) => {
  ctx.status = 200;
  ctx.body = 'Hello World';
  next();
});

module.exports = { routes: router.routes() };
