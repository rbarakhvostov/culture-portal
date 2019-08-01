import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import WorksList from '../components/director/WorksList';
import Biography from '../components/director/Biography';
import Map from '../components/director/map/Map';
import Gallery from '../components/director/gallery/Gallery';
import Video from '../components/director/video/Video';
import Overview from '../components/director/overview/Overview';
import Loader from '../components/Loader';

const Director = ({ location }) => {
  const { director } = location.state ? location.state : null;

  return (
    <>
      <Header />
      <Sidebar />
      <Overview director={director} />
      <Biography director={director} />
      <WorksList director={director} />
      <Gallery director={director} />
      <Video director={director} />
      <Map director={director} />
    </>
  );
};

const DirectorWrapper = ({ location }) => (
  <>
    {typeof window !== 'undefined' && (
      <Suspense fallback={<Loader />}>
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
