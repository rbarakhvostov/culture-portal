import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowButton from '@material-ui/icons/ArrowForwardIos';
import Overview from '../director/overview/Overview';
import useDirectorId from '../../utils/useDirectorId';
import ResultsStyles from './results.module.css';

const DirectorItem = ({ director }) => {
  const id = useDirectorId(director);

  return (
    <>
      <li className={ResultsStyles.listItem}>
        <Overview id={id} />
        <Link
          className={ResultsStyles.link}
          to="/director/"
          state={{ director }}
        >
          <IconButton size="medium">
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
