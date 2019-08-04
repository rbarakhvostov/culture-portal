import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import DirectorItem from './DirectorItem';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import getLangueage from '../../utils/i18n';

const useStyles = makeStyles({
  results: {
    display: 'flex',
    width: '75%',
    margin: '30px auto',
    flexDirection: 'column',
  },

  notfound: {
    margin: '1%',
    fontSize: '20px',
  },
});

const Result = ({ filter }) => {
  const directorsData = useDirectorsNamespaces();
  const namespaces = Object.keys(directorsData);
  const { t } = useTranslation('layout');
  const styles = useStyles();
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

  if (!filtered.length)
    return (
      <Paper className={styles.results}>
        <span className={styles.notfound}>{t('director_not_found')}</span>
      </Paper>
    );

  return (
    <Paper className={styles.results}>
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
