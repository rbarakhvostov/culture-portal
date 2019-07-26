import React, { Suspense } from 'react';

import '../utils/i18n';
import Header from '../components/layout/Header';

const Main = () => (
  <>
    <Header />
  </>
);

const MainWrapper = () => (
  <Suspense fallback="loading">
    <Main />
  </Suspense>
);

export default MainWrapper;
