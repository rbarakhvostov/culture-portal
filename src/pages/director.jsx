import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import DirectorPage from '../components/layout/DirectorPage'

const curDir = 'alexandrovskaya';

const Director = () => (
  <>
    <Header />
    {DirectorPage(curDir)}
    <Sidebar />
  </>
);

const DirectorWrapper = () => (
  <Suspense fallback="loading">
    <Director />
  </Suspense>
);

export default DirectorWrapper;