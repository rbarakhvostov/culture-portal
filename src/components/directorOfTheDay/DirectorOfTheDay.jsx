import React from 'react';
import { Link } from 'gatsby';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import Overview from '../director/overview/Overview';

const DirectorOfTheDay = () => {
  let director;
  const day = new Date();
  const namespaces = useDirectorsNamespaces();
  if (day.getDay() === 1 || day.getDay() === 4) [director] = [namespaces[0]];
  if (day.getDay() === 2 || day.getDay() === 6) [director] = [namespaces[1]];
  if (day.getDay() === 1) [director] = [namespaces[2]];
  if (day.getDay() === 5) [director] = [namespaces[3]];
  if (day.getDay() === 0) [director] = [namespaces[4]];
  return (
    <Link to="/director/" state={{ director }}>
      <Overview director={director} />
    </Link>
  );
};

export default DirectorOfTheDay;
