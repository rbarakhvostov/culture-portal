import React, { Suspense } from 'react';

import '../utils/i18n';
import Header from '../components/layout/Header';
import DeveloperDay from '../components/developerDay/developerDay';

const Main = () => (
  <>
    <Header />
    <DeveloperDay director="alexandrovskaya" />
  </>
);

const MainWrapper = () => (
  <Suspense fallback="loading">
    <Main />
  </Suspense>
);

export default MainWrapper;
