import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import PortalDescription from '../components/main/PortalDescription';
import DirectorOfTheDay from '../components/main/directorOfTheDay/DirectorOfTheDay';
import Team from '../components/main/team/Team';
import Loader from '../components/layout/Loader';

const Main = () => (
  <>
    <Header />
    <PortalDescription />
    <DirectorOfTheDay />
    <Team />
  </>
);

const MainWrapper = () => (
  <>
    {typeof window !== 'undefined' && (
      <Suspense fallback={<Loader />}>
        <Main />
      </Suspense>
    )}
  </>
);

export default MainWrapper;
