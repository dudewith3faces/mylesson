const { BaseResponse } = require('../models');

const errorMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    console.log(e);
    ctx.status = 400;

    ctx.body = new BaseResponse({ message: 'Something went wrong' });
  }
};

module.exports = { errorMiddleware };
