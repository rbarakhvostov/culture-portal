import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Map from '../components/director/map/Map';
import Video from '../components/director/video/Video';
import Gallery from '../components/director/gallery/Gallery';

const Director = ({ location }) => {
  const { director } = location.state ? location.state : null;

  return (
    <>
      <Header />
      <Sidebar />
      <Map director={director} />
      <Gallery director={director} />
      <Video director={director} />
    </>
  );
};

const DirectorWrapper = ({ location }) => (
  <>
    {typeof window !== 'undefined' && (
      <Suspense fallback="loading">
        <Director location={location} />
      </Suspense>
    )}
  </>
);

Director.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

DirectorWrapper.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DirectorWrapper;
