import axios from 'axios';

const api = async ({ url, headers, method = 'GET', body = {} }) => {
  console.log({ url });
  const options = {
    url,
    method,
    headers,
  };

  try {
    if (method === 'POST') {
      options.data = body;
    }

    return (await axios.request(options)).data;
  } catch (e) {
    console.error(e);
    throw new Error(e.message);
  }
};

const getMoviesEndpoint = (q) => `http://localhost:50000?q=${q}`;

export const getMovies = async (q) =>
  (await api({ url: getMoviesEndpoint(q) })).data;
