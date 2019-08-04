import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowButton from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';

import Overview from '../director/overview/Overview';
import useDirectorId from '../../utils/useDirectorId';

const useStyles = makeStyles({
  item: {
    display: 'flex',
    padding: '1%',
    justifyContent: 'space-between',
    listStyle: 'none',
    fontSize: ' 1.1rem',
    alignItems: 'center',
    ['@media only screen  and (max-width: 768px)']: {
      width: '95%',
      flexDirection: 'column',
      margin: '0 auto',
    }
  },
  link: {
    marginLeft: '5%',
    color: '#888585',
    textDecoration: 'none',
  },
});

const DirectorItem = ({ director }) => {
  const id = useDirectorId(director);
  const styles = useStyles();

  return (
    <>
      <li className={styles.item}>
        <Overview id={id} />
        <Link className={styles.link} to="/director/" state={{ director }}>
          <IconButton>
            <ArrowButton fontSize="large" />
          </IconButton>
        </Link>
      </li>
      <Divider />
    </>
  );
};

DirectorItem.propTypes = {
  director: PropTypes.string.isRequired,
};

export default DirectorItem;
