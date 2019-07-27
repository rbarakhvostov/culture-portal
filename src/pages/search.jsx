import React, { Suspense } from 'react';

import Header from '../components/layout/Header';

const Search = () => (
  <>
    <Header />
  </>
);

const SearchWrapper = () => (
  <Suspense fallback="loading">
    <Search />
  </Suspense>
);

export default SearchWrapper;
