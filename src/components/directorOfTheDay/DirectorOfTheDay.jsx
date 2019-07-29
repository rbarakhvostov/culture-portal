import React from 'react';
import { Link } from 'gatsby';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import Overview from '../director/overview/Overview';
import chooseDirector from './chooseDirector';

const DirectorOfTheDay = () => {
  const director = chooseDirector(useDirectorsNamespaces());
  return (
    <Link to="/director/" state={{ director }}>
      <Overview director={director} />
    </Link>
  );
};

export default DirectorOfTheDay;
