import React, { Suspense } from 'react';

import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Work from '../directorpage/Work'
import Bio from '../directorpage/Bio'
import Carousel from '../directorpage/Carousel'
import Overview from '../directorpage/Overview'

const director = 'alexandrovskaya';

const Director = () => (
  <>
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