import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import uniqid from 'uniqid';

import Header from '../components/layout/Header';
import Menu from '../components/layout/Menu';
import WorksList from '../components/director/WorksList';
import Biography from '../components/director/Biography';
import Map from '../components/director/map/Map';
import Gallery from '../components/director/gallery/Gallery';
import Video from '../components/director/video/Video';
import Overview from '../components/director/overview/Overview';
import Loader from '../components/Loader';

const getElements = (data) => {
  return Object.keys(data).map((item) => (
    <Element key={uniqid()} name={item}>
      {data[`${item}`]}
    </Element>
  ));
};

const Director = ({ location }) => {
  const { director } = location.state ? location.state : null;

  const mapNameComponent = {
    start: (
      <Header>
        <Menu />
      </Header>
    ),
    overview: <Overview director={director} />,
    biography: <Biography director={director} />,
    workslist: <WorksList director={director} />,
    gallery: <Gallery director={director} />,
    video: <Video director={director} />,
    map: <Map director={director} />,
  };

  return <>{getElements(mapNameComponent)}</>;
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
