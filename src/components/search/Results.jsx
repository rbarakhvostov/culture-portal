import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import Overview from '../director/overview/Overview';

import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';

import ResultsStyles from './results.module.css';

const Result = ({ filter }) => {
  const namespaces = useDirectorsNamespaces();
  const { t } = useTranslation(namespaces);
  const results = {};

  namespaces.forEach((director, index) => {
    const prop = {
      [t(`${director}:name`)]: namespaces[index],
    };

    Object.assign(results, prop);
  });
  return (
    <ul className={ResultsStyles.results}>
      {Object.keys(results)
        .filter((director) =>
          director.toLowerCase().includes(filter.toLowerCase())
        )
        .map((director) => (
          <li className={ResultsStyles.listItem} key={uniqid()}>
            <Link
              className={ResultsStyles.link}
              to="/director/"
              state={{ director: results[director] }}
            >
              <Overview director={results[director]} />
            </Link>
          </li>
        ))}
    </ul>
  );
};

Result.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Result;