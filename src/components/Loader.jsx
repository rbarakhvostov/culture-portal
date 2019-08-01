import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  progress: {
    margin: '10px',
    color: '#03d7fc',
  },
});

const Loader = () => {
  const styles = useStyles();

  return (
    <div>
      <CircularProgress className={styles.progress} />
    </div>
  );
};

export default Loader;
