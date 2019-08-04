import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import PageNotFound from '../components/layout/PageNotFound';
import Loader from '../components/layout/Loader';

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
