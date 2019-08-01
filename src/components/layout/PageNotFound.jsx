import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const PageNotFound = () => {
  const { t } = useTranslation('layout');
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h3" component="h2">
          404
        </Typography>
        <Typography component="p">{t('error-message')}</Typography>
      </Paper>
    </div>
  );
};

export default PageNotFound;
