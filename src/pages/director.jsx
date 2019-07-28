import React, { Suspense } from 'react';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const Director = () => (
  <>
    <Header />
    <Sidebar />
  </>
);

const DirectorWrapper = () => (
  <>
    {typeof window !== 'undefined' && (
      <Suspense fallback="loading">
        <Director />
      </Suspense>
    )}
  </>
);

export default DirectorWrapper;
