const { BaseResponse } = require('../models');
const { Cache, populateDatabase, getMovies } = require('../services');

const queryMovies = async (ctx, next) => {
  let res = [];
  // TODO: get query from endpoint: ctx.request.query
  const { q } = ctx.request.query;

  // TODO: search database for such data
  if (q) {
    if (Cache.isCacheEmpty()) {
      await populateDatabase();

      const movies = await getMovies();

      Cache.add(movies);
    }
    res = Cache.query(q);
  }

  // TODO return data from database
  ctx.status = 200;
  ctx.body = new BaseResponse({ data: res });

  next();
};

module.exports = { queryMovies };
