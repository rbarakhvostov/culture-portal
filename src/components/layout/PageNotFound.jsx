import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccessibilityIcon from '@material-ui/icons/AccessibilityNew';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  messageWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  message: {
    padding: '1vw 1vw',
    width: '20vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '20vw',
    color: '#607d8b',
  },
}));

const PageNotFound = () => {
  const { t } = useTranslation('layout');
  const classes = useStyles();

  return (
    <div className={classes.messageWrapper}>
      <Paper className={classes.message}>
        <AccessibilityIcon className={classes.icon} />
        <Typography variant="h3" component="h2">
          404
        </Typography>
        <Typography component="p">{t('error-message')}</Typography>
      </Paper>
    </div>
  );
};

export default PageNotFound;
