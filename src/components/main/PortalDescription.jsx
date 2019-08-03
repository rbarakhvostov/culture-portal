import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  wrapper: {
    width: '60%',
    margin: '0 auto',
    padding: '0 10px',
    textAlign: 'justify',
    overflow: 'hidden',
    boxShadow: 'none',
  },
  title: {
    marginBottom: '10px',
    fontSize: '1.7em',
    fontWeight: '700',
    textAlign: 'center',
  },
  paragraph: {
    textIndent: '1.5em',
    fontSize: '1.2em',
    lineHeight: '1.6',
  },
});

const PortalDescription = () => {
  const { t } = useTranslation('description');
  const styles = useStyles();

  return (
    <Paper className={styles.wrapper}>
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
      <Typography className={styles.paragraph} component="p">
        {t('p4')}
      </Typography>
    </Paper>
  );
};

export default PortalDescription;
