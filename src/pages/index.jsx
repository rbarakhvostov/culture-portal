import React, { Suspense } from 'react';

import '../utils/i18n';
import Header from '../components/layout/Header';
import Biography from '../components/director/Biography';

const Main = () => (
  <>
    <Header />
    <Biography director="alexandrovskaya" />
  </>
);

const MainWrapper = () => (
  <Suspense fallback="loading">
    <Main />
  </Suspense>
);

export default MainWrapper;
