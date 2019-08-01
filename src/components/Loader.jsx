import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  loaderWrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    color: '#607d8b',
  },
});

const Loader = () => {
  const styles = useStyles();

  return (
    <div className={styles.loaderWrapper}>
      <CircularProgress className={styles.loader} size="10vmin" />
    </div>
  );
};

export default Loader;
