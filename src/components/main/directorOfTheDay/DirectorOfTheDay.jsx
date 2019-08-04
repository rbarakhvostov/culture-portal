import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Overview from '../../director/overview/Overview';
import useDirectorsNamespaces from '../../../utils/useDirectorsNamespaces';
import useDirectorId from '../../../utils/useDirectorId';
import chooseDirector from './chooseDirector';

const useStyles = makeStyles({
  container: {
    width: '75vw',
    margin: '100px auto',
    boxShadow: 'none',
    cursor: 'pointer',
  },
  heading: {
    padding: '10px',
    fontSize: '24px',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#607d8b',
  },
  link: {
    textDecoration: 'none',
  },
});

const DirectorOfTheDay = () => {
  const { t } = useTranslation('layout');
  const namespaces = Object.keys(useDirectorsNamespaces());
  const director = chooseDirector(namespaces);
  const id = useDirectorId(director);
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Link to="/director/" state={{ director }} className={styles.link}>
        <div className={styles.heading}>{t('title_director_block')}</div>
        <Container maxWidth="lg">
          <Overview id={id} />
        </Container>
      </Link>
    </div>
  );
};

export default DirectorOfTheDay;
