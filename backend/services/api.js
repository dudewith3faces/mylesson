const axios = require('axios');

const api = async ({ url, headers, method = 'GET', body = {} }) => {
  const options = {
    url,
    method,
    headers,
  };

  //   try {
  if (method === 'POST') {
    options.data = body;
  }

  return (await axios.default.request(options)).data;
  //   } catch (e) {
  // console.error(e);
  /* throw new BaseError({
      statusCode: e.response.status,
      body: e.response.data.errors,
      message: e.message,
    }); */
  //   }
};

module.exports = { api };
