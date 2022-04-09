const compose = require('koa-compose');
const Cors = require('koa2-cors');
const { BaseResponse } = require('../models');

const corsOption = {
  allowHeaders: ['Content-Type', 'Accept'],
  allowMethods: ['GET', 'POST', 'OPTIONS', 'DELETE'],
  origin: '*',
};

const cors = Cors(corsOption);

const errorMiddleware = async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.status = 400;

    ctx.body = new BaseResponse({ message: 'Something went wrong' });
  }
};

const middlewares = compose([cors, errorMiddleware]);

module.exports = { middlewares };
