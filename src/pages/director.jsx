import React, { Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import WorksList from '../components/director/WorksList';
import Biography from '../components/director/Biography';
import Map from '../components/director/map/Map';
import Gallery from '../components/director/gallery/Gallery';
import Video from '../components/director/video/Video';
import Overview from '../components/director/overview/Overview';
import getDirectorData from '../utils/getDirectorData';
import useDirectorId from '../utils/useDirectorId';

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

  return (
    <>
      <Header />
      <Sidebar />
      <Overview id={data} />
      <Biography data={data} />
      <WorksList work={data.work} />
      <Gallery path={data.path} />
      <Video video={data.video} />
      <Map mapData={data.mapData} />
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
