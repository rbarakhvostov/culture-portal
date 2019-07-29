import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import Team from '../components/main/team/Team';

const Main = () => (
  <>
    <Header />
    <Team />
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
