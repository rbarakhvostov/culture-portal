import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import uniqid from 'uniqid';
import getLanguege from '../../utils/i18n';
import Overview from '../director/overview/Overview';
import useDirectorId from '../../utils/useDirectorId';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import ResultsStyles from './results.module.css';

const Result = ({ filter }) => {
  const namespaces = useDirectorsNamespaces();
  const results = {};

  const lng = getLanguege();

  namespaces.forEach((director, index) => {
    const prop = {
      [t(`${director}:name`)]: namespaces[index],
    };

    console.log(prop);

    Object.assign(results, prop);
  });
  return (
    <ul className={ResultsStyles.results}>
      {Object.keys(results)
        .filter((director) =>
          director.toLowerCase().includes(filter.toLowerCase())
        )
        .map((director) => {
          const id = useDirectorId(results[director]);

          return (
            <li className={ResultsStyles.listItem} key={uniqid()}>
              <Link
                className={ResultsStyles.link}
                to="/director/"
                state={{ director: results[director] }}
              >
                <Overview id={id} />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

Result.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Result;
