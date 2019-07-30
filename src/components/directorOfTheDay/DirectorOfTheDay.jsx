import React from 'react';
import { Link } from 'gatsby';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import Overview from '../director/overview/Overview';
import chooseDirector from './chooseDirector';
import directorOftheDayStyles from './directorOfTheDay.module.css';

const DirectorOfTheDay = () => {
  const director = chooseDirector(useDirectorsNamespaces());
  console.log(useDirectorsNamespaces());
  console.log(director);
  return (
    <Link
      to="/director/"
      state={{ director }}
      className={directorOftheDayStyles.directorBlock}
    >
      <Overview director={director} />
    </Link>
  );
};

export default DirectorOfTheDay;
