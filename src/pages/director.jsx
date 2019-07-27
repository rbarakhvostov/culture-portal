import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Map from '../components/directorpage/Map';

const director = 'alexandrovskaya';

const Director = () => (
  <>
    <Header />
    <Sidebar />
    {Map(director)}
  </>
);

const DirectorWrapper = () => (
  <Suspense fallback="loading">
    <Director />
  </Suspense>
);

export default DirectorWrapper;
