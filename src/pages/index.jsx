import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import DeveloperDay from '../components/developerDay/developerDay';

const Main = () => (
  <>
    <Header />
    <DeveloperDay />
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
