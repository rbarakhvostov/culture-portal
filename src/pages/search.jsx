import React, { Suspense, useState } from 'react';

import Header from '../components/layout/Header';
import Searchbox from '../components/search/Searchbox';
import Results from '../components/search/Results';

const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <Header />
      <Searchbox value={query} onChange={setQuery} />
      <Results filter={query} />
    </>
  );
};

const SearchWrapper = () => (
  <>
    {typeof window !== 'undefined' && (
      <Suspense fallback="loading">
        <Search />
      </Suspense>
    )}
  </>
);

export default SearchWrapper;
