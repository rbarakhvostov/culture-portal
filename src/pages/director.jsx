import React from 'react';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DirectorPage from '../components/DirectorPage/Director';

const Director = () => (
  <>
    <Header />
    <Sidebar />
    <h1>director</h1>
    <DirectorPage />
  </>
);

export default Director;
