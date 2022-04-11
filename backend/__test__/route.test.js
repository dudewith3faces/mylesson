import 'babel-polyfill';

import { should, use, request, assert } from 'chai';
// const { should, use, request, assert } = require('chai');
const chaiHttp = require('chai-http');

const { app } = require('../app');

jest.setTimeout(50000);

should();

use(chaiHttp);

describe('Query Movies', () => {
  it('It should return and empty array', (done) => {
    request(app.callback())
      .get('/')
      .end((err, res) => {
        assert.isNull(err);
        assert.equal(res.status, 200);
        assert.isObject(res.body);
        assert.property(res.body, 'message');
        assert.property(res.body, 'data');
        assert.equal(res.body.message, 'Ok');
        assert.isArray(res.body.data);

        done();
      });
  });

  it('It should return and data', (done) => {
    request(app.callback())
      .get('/?q=space')
      .end((err, res) => {
        const [data] = res.body.data;
        assert.property(data, 'title');
        assert.property(data, 'director');
        assert.property(data, 'plot');
        assert.property(data, 'poster');
        assert.property(data, 'id');

        done();
      });
  });
});
