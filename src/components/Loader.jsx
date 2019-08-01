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
    color: '#03d7fc',
  },
});

const Loader = () => {
  const styles = useStyles();

  return (
    <div className={styles.loaderWrapper}>
      <CircularProgress className={styles.loader} />
    </div>
  );
};

export default Loader;
