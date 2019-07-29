import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';

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
    <ul>
      {Object.keys(results)
        .filter((director) =>
          director.toLowerCase().includes(filter.toLowerCase())
        )
        .map((director) => (
          <li key={uniqid()}>
            <Link to="/director/" state={{ director: results[director] }}>
              {director}
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
