import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import Searchbox from '../components/search/Searchbox';
import Results from '../components/search/Results';
import Loader from '../components/Loader';

const Search = () => (
  <>
    <Header />
    <Searchbox />
    <Results />
  </>
);

const SearchWrapper = () => (
  <>
    {typeof window !== 'undefined' && (
      <Suspense fallback={<Loader />}>
        <Search />
      </Suspense>
    )}
  </>
);

export default SearchWrapper;
