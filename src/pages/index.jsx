import React, { Suspense } from 'react';

import Header from '../components/layout/Header';

const Main = () => (
  <>
    <Header />
  </>
);

const MainWrapper = () => (
  <>
    {typeof window !== 'undefined' && (
      <Suspense fallback="loading">
        <Main />
      </Suspense>
    )}
  </>
);

export default MainWrapper;
