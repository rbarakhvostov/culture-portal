import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { useTranslation } from 'react-i18next';

import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';

const Searchbox = ({ filter }) => {
  const namespaces = useDirectorsNamespaces();
  const { t } = useTranslation(namespaces);
  const results = namespaces.map((item) => t(`${item}:name`));

  return (
    <ul>
      {results
        .filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
        .map((item) => (
          <li key={uniqid()}>{item}</li>
        ))}
    </ul>
  );
};

Searchbox.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Searchbox;
