import { useState } from 'react';

import { getMovies } from './api';

export const MovieSearchService = () => {
  const [q, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const [hasSearched, setHasSearched] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await getMovies(q);

    setMovies(res);
    setHasSearched(true);
  };

  const onChange = ({ target: { value } }) => {
    setQuery(value);
  };

  return { movies, q, onChange, onSubmit, hasSearched };
};
