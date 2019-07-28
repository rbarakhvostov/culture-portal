import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Map from '../components/director/Map';

const Director = ({ location }) => {
  console.log(location);
  const director = location.state ? location.state.director : null;

  return (
    <>
      <Header />
      <Sidebar />
      {Map(director)}
    </>
  );
};

const DirectorWrapper = () => (
  <Suspense fallback="loading">
    <Director />
  </Suspense>
);

Director.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DirectorWrapper;
