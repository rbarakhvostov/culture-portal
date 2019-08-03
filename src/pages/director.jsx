import React, { Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Element } from 'react-scroll';
import uniqid from 'uniqid';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import WorksList from '../components/director/WorksList';
import Biography from '../components/director/Biography';
import Map from '../components/director/map/Map';
import Gallery from '../components/director/gallery/Gallery';
import Video from '../components/director/video/Video';
import Overview from '../components/director/overview/Overview';
import useDirectorData from '../utils/useDirectorData';
import useDirectorId from '../utils/useDirectorId';
import Loader from '../components/Loader';

const getElements = (data) => {
  return Object.keys(data).map((item) => (
    <Element key={uniqid()} name={item}>
      {data[`${item}`]}
    </Element>
  ));
};

const Director = ({ location }) => {
  const { t } = useTranslation('layout');
  const { director } = location.state ? location.state : null;
  const id = useDirectorId(director);

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const directorData = await useDirectorData(id);
      setData(directorData);
    }
    fetchData();
  }, [id]);

  if (data === null)
    return (
      <>
        <Header />
        <Loader />
      </>
    );

  const mapNameComponent = {
    start: <Header />,
    overview: <Overview id={data} />,
    biography: <Biography bio={data.bio} />,
    workslist: <WorksList works={data.work} />,
    gallery: <Gallery path={data.path} />,
    video: <Video video={data.video} />,
    map: <Map mapData={data.mapData} />,
  };

  return getElements(mapNameComponent);
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
