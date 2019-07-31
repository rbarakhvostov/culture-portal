import React, { Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import WorksList from '../components/director/WorksList';
import Biography from '../components/director/Biography';
import Map from '../components/director/map/Map';
import Gallery from '../components/director/gallery/Gallery';
import Video from '../components/director/video/Video';
import Overview from '../components/director/overview/Overview';
import getData from '../utils/contentful';

const Director = ({ location }) => {
  console.log(location.state);
  const { id } = location.state ? location.state : null;
  console.log(id);

  const [data, setData] = useState(null);

  useEffect(() => {
    async function foo() {
      const directorData = await getData(id);
      console.log(directorData);
      setData(directorData);
    }
    foo();
  }, [id]);
  console.log(data);

  if (data === null)
    return (
      <>
        <Header />
        <Sidebar />
        <div>Loading</div>
      </>
    );

  return (
    <>
      <Header />
      <Sidebar />
      {/* <Overview director={id} />
      <Biography director={id} />
      <WorksList director={id} />
      <Gallery director={id} />
      <Video director={id} />
      <Map director={id} /> */}
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
