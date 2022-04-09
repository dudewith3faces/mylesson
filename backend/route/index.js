const router = require('@koa/router')();
const { BaseResponse } = require('../models');
const { searchMovies } = require('../services');

router.get('/', async (ctx, next) => {
  let res = [];
  // TODO: get query from endpoint: ctx.request.query
  const { q } = ctx.request.query;

  // TODO: search database for such data
  if (q) res = await searchMovies(q);

  // TODO return data from database
  ctx.status = 200;
  ctx.body = new BaseResponse({ data: res });

  next();
});

module.exports = { routes: router.routes() };
