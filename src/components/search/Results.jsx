import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';

const Searchbox = ({ filter }) => {
  const namespaces = useDirectorsNamespaces();
  const { t } = useTranslation(namespaces, { useSuspense: false });
  const results = {};

  namespaces.forEach((namespace, index) => {
    const director = {
      [t(`${namespace}:name`)]: namespaces[index],
    };

    Object.assign(results, director);
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

Searchbox.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Searchbox;
