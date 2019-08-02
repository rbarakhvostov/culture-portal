import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import Overview from '../director/overview/Overview';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import chooseDirector from './chooseDirector';
import directorOftheDayStyles from './directorOfTheDay.module.css';
import getDirectorId from '../../utils/getDirectorId';

const DirectorOfTheDay = () => {
  const { t } = useTranslation('layout');
  const namespaces = Object.keys(useDirectorsNamespaces());
  console.log(namespaces);
  const director = chooseDirector(namespaces);
  const id = getDirectorId(director);
  return (
    <Link
      to="/director/"
      state={{ director }}
      className={directorOftheDayStyles.directorBlock}
    >
      <div>{t('title_director_block')}</div>
      <Overview id={id} />
    </Link>
  );
};

export default DirectorOfTheDay;
