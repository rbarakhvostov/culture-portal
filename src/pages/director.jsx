import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';

import Header from '../components/layout/Header';
import Menu from '../components/layout/Menu';
import WorksList from '../components/director/WorksList';
import Biography from '../components/director/Biography';
import Map from '../components/director/map/Map';
import Gallery from '../components/director/gallery/Gallery';
import Video from '../components/director/video/Video';
import Overview from '../components/director/overview/Overview';

const Director = ({ location }) => {
  const { director } = location.state ? location.state : null;

  return (
    <>
      <Element name="start">
        <Header>
          <Menu />
        </Header>
      </Element>
      <Element name="overview">
        <Overview director={director} />
      </Element>
      <Element name="biography">
        <Biography director={director} />
      </Element>
      <Element name="workslist">
        <WorksList director={director} />
      </Element>
      <Element name="gallery">
        <Gallery director={director} />
      </Element>
      <Element name="video">
        <Video director={director} />
      </Element>
      <Element name="map">
        <Map director={director} />
      </Element>
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
