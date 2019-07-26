import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Work from '../components/directorpage/Work';
import Bio from '../components/directorpage/Bio';
import Carousel from '../components/directorpage/Carousel';
import Overview from '../components/directorpage/Overview';
import Map from '../components/directorpage/Map';

const director = 'alexandrovskaya';

const Director = () => (
  <>
    {Map(director)}
    <Header />
    <Sidebar />
    {Overview(director)}
    {Bio(director)}
    {Work(director)}
    {Carousel(director)}
  </>
);

const DirectorWrapper = () => (
  <Suspense fallback="loading">
    <Director />
  </Suspense>
);

export default DirectorWrapper;
