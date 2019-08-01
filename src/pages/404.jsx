import React, { Suspense } from 'react';

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
      <Suspense fallback="loading">
        <NotFound />
      </Suspense>
    )}
  </>
);

export default NotFoundWrapper;
