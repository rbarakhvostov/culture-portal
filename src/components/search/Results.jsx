import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Paper from '@material-ui/core/Paper';
import DirectorItem from './DirectorItem';
import getLangueage from '../../utils/i18n';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import ResultsStyles from './results.module.css';

const Result = ({ filter }) => {
  const directorsData = useDirectorsNamespaces();
  const namespaces = Object.keys(directorsData);
  const { t } = useTranslation('layout');
  const results = {};

  const lng = getLangueage();
  namespaces.forEach((director) => {
    const prop = {
      [director]: directorsData[director][lng],
    };

    Object.assign(results, prop);
  });

  const filtered = Object.keys(results).filter((director) =>
    directorsData[director][lng].toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Paper className={ResultsStyles.results}>
      <ul>
        {filtered.map((director) => (
          <DirectorItem director={director} key={director} />
        ))}
      </ul>
    </Paper>
  );
};

Result.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Result;
