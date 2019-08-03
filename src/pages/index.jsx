import React, { Suspense } from 'react';
import Header from '../components/layout/Header';
import Team from '../components/main/team/Team';
import DirectorOfTheDay from '../components/directorOfTheDay/DirectorOfTheDay';
import Loader from '../components/Loader';
import PortalDescription from '../components/main/PortalDescription';

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
