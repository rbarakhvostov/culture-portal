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
import foo from '../utils/contentful';

const Director = ({ location }) => {
  const { director } = location.state ? location.state : null;

  const data = foo(director);
  // console.log(`director:${data}`);

  return (
    <>
      <Header />
      <Sidebar />
      <Overview director={data} />
      <Biography director={data} />
      <WorksList director={data} />
      <Gallery director={data} />
      <Video director={data} />
      <Map director={data} />
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
