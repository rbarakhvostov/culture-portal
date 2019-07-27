import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Map from '../components/director/Map';

const Director = (director) => (
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
