import React, { Suspense } from 'react';

import '../utils/i18n';
import Header from '../components/layout/Header';
import WorksList from '../components/director/WorksList';

const Main = () => (
  <>
    <Header />
    <WorksList director="alexandrovskaya" />
  </>
);

const MainWrapper = () => (
  <Suspense fallback="loading">
    <Main />
  </Suspense>
);

export default MainWrapper;
