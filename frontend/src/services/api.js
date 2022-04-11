import axios from 'axios';

const api = async ({ url, headers, method = 'GET', body = {} }) => {
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
    throw new Error(e.message);
  }
};

const devUrl = 'http://localhost:50000';
const dockerUrl = 'http://app:50000';
// ${process.env.NODE_ENV === 'production?' ?  : devUrl

const getMoviesEndpoint = (q) => `${devUrl}?q=${q}`;

export const getMovies = async (q) =>
  (await api({ url: getMoviesEndpoint(q) })).data;
