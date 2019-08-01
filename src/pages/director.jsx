import React, { Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import uniqid from 'uniqid';

import Header from '../components/layout/Header';
import WorksList from '../components/director/WorksList';
import Biography from '../components/director/Biography';
import Map from '../components/director/map/Map';
import Gallery from '../components/director/gallery/Gallery';
import Video from '../components/director/video/Video';
import Overview from '../components/director/overview/Overview';
import getDirectorData from '../utils/getDirectorData';
import useDirectorId from '../utils/useDirectorId';

const getElements = (data) => {
  return Object.keys(data).map((item) => (
    <Element key={uniqid()} name={item}>
      {data[`${item}`]}
    </Element>
  ));
};

const Director = ({ location }) => {
  const { director } = location.state ? location.state : null;
  const id = useDirectorId(director);

  // fix for reload page
  const { t } = useTranslation();
  console.log(t);

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const directorData = await getDirectorData(id);
      setData(directorData);
    }
    fetchData();
  }, [id]);

  if (data === null)
    return (
      <>
        <Header />
        <Sidebar />
      </>
    );

  const mapNameComponent = {
    start: <Header />,
    overview: <Overview id={data} />,
    biography: <Biography data={data} />,
    workslist: <WorksList work={data.work} />,
    gallery: <Gallery path={data.path} />,
    video: <Video video={data.video} />,
    map: <Map mapData={data.mapData} />,
  };

  return <>{getElements(mapNameComponent)}</>;
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
