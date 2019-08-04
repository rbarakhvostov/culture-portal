import React from 'react';
import { useTranslation } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '75%',
    margin: '30px auto',
    textAlign: 'justify',
    boxShadow: 'none',
    ['@media only screen and (min-width: 1400px)']: {
      width: '60%',
    },
  },
  title: {
    margin: '30px 0',
    fontSize: '1.7em',
    fontWeight: '700',
    textAlign: 'center',
  },
  paragraph: {
    textIndent: '1.5em',
    fontSize: '1.2em',
  },
});

const PortalDescription = () => {
  const { t } = useTranslation('description');
  const styles = useStyles();

  return (
    <Paper className={styles.container}>
      <Typography className={styles.title} component="h2">
        {t('title')}
      </Typography>
      <Typography className={styles.paragraph} component="p">
        {t('p1')}
      </Typography>
      <Typography className={styles.paragraph} component="p">
        {t('p2')}
      </Typography>
      <Typography className={styles.paragraph} component="p">
        {t('p3')}
      </Typography>
    </Paper>
  );
};

export default PortalDescription;
