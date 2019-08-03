import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core//Paper';
import Container from '@material-ui/core/Container';
import Overview from '../director/overview/Overview';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import chooseDirector from './chooseDirector';
import directorOftheDayStyles from './directorOfTheDay.module.css';
import useDirectorId from '../../utils/useDirectorId';

const DirectorOfTheDay = () => {
  const { t } = useTranslation('layout');
  const namespaces = Object.keys(useDirectorsNamespaces());
  const director = chooseDirector(namespaces);
  const id = useDirectorId(director);
  return (
    <Paper className={directorOftheDayStyles.directorBlock}>
      <Link
        to="/director/"
        state={{ director }}
        className={directorOftheDayStyles.directorLink}
      >
        <div className={directorOftheDayStyles.directorHeader}>
          {t('title_director_block')}
        </div>
        <Container maxWidth="lg">
          <Overview id={id} />
        </Container>
      </Link>
    </Paper>
  );
};

export default DirectorOfTheDay;
