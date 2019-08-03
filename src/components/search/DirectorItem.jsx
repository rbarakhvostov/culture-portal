import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Overview from '../director/overview/Overview';
import useDirectorId from '../../utils/useDirectorId';
import ResultsStyles from './results.module.css';

const DirectorItem = ({ director }) => {
  const id = useDirectorId(director);

  return (
    <li className={ResultsStyles.listItem}>
      <Link className={ResultsStyles.link} to="/director/" state={{ director }}>
        <Overview id={id} />
      </Link>
    </li>
  );
};

DirectorItem.propTypes = {
  director: PropTypes.string.isRequired,
};

export default DirectorItem;
