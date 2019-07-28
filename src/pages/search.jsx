import React, { Suspense } from 'react';

import Header from '../components/layout/Header';

const Search = () => (
  <>
    <Header />
  </>
);

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
