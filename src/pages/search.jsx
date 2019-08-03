import React, { Suspense } from 'react';
import Header from '../components/layout/Header';
import SearchBlock from '../components/search/SearchBlock';
import Loader from '../components/Loader';

const Search = () => {
  return (
    <>
      <Header />
      <SearchBlock />
    </>
  );
};

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
