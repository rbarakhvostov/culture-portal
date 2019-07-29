import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import DirectorOfTheDay from '../components/directorOfTheDay/DirectorOfTheDay';

const Main = () => (
  <>
    <Header />
    <DirectorOfTheDay />
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
