class BaseResponse {
  constructor(val) {
    this.data = val.data;
    this.message = val.message ?? 'Ok';
  }
}

module.exports = { BaseResponse };
