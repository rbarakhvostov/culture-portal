import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Work from '../components/layout/directorpage/Work';
import Bio from '../components/layout/directorpage/Bio';
import Carousel from '../components/layout/directorpage/Carousel';
import Overview from '../components/layout/directorpage/Overview';
import Cocaine from '../components/layout/directorpage/Map';

const director = 'alexandrovskaya';

const Director = () => (
  <>
    <Header />
    <Sidebar />
    {Overview(director)}
    {Bio(director)}
    {Work(director)}
    {Carousel(director)}
    <Cocaine />
  </>
);

const DirectorWrapper = () => (
  <Suspense fallback="loading">
    <Director />
  </Suspense>
);

export default DirectorWrapper;
