import React, { Suspense } from 'react';

import '../utils/i18n';
import Header from '../components/layout/Header';
import Team from '../components/main/Team';

const Main = () => (
  <>
    <Header />
    <Team />
  </>
);

const MainWrapper = () => (
  <Suspense fallback="loading">
    <Main />
  </Suspense>
);

export default MainWrapper;
