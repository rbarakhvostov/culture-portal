import React, { Suspense } from 'react';
import Loader from '../components/Loader';
import Header from '../components/layout/Header';
import PageNotFound from '../components/layout/PageNotFound';

const NotFound = () => (
  <>
    <Header />
    <PageNotFound />
  </>
);

const NotFoundWrapper = () => (
  <>
    {typeof window !== 'undefined' && (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    )}
  </>
);

export default NotFoundWrapper;
