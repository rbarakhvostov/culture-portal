import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import Overview from '../director/overview/Overview';
import chooseDirector from './chooseDirector';
import directorOftheDayStyles from './directorOfTheDay.module.css';
import useDirectorId from '../../utils/useDirectorId';

const DirectorOfTheDay = () => {
  const { t } = useTranslation('layout');
  const director = chooseDirector(useDirectorsNamespaces());
  const id = useDirectorId(director);
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
