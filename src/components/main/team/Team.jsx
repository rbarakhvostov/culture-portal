import React from 'react';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Developer from './Developer';

const gitHubIds = [
  'rbarakhvostov',
  'wofec',
  'andreikrivets',
  'SvetlankaKuzyaka',
  'vld-m',
];

const useStyles = makeStyles({
  team: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontFamily: '"Roboto", sans-serif',
    fontSize: '2vw',
    fontWeight: 500,
    textAlign: 'center',
    '@media (max-width:520px)': {
      fontSize: '4vw',
    },
  },
  members: {
    display: 'flex',
    margin: '5vh 0',
    justifyContent: 'center',
    '@media (max-width:520px)': {
      margin: '5vh 0',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
});

const Team = () => {
  const { t } = useTranslation('team');
  const styles = useStyles();

  return (
    <Container className={styles.team}>
      <p className={styles.title}>{t('title')}</p>
      <Container className={styles.members}>
        {gitHubIds.map((id) => (
          <Developer id={id} key={uniqid()} />
        ))}
      </Container>
    </Container>
  );
};

export default Team;
