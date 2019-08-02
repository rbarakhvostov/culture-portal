import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import ArrowButton from '@material-ui/icons/ArrowForwardIos';
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
    <Paper className={ResultsStyles.results}>
      <ul>
        {Object.keys(results)
          .filter((director) =>
            director.toLowerCase().includes(filter.toLowerCase())
          )
          .map((director) => (
            <>
              <li className={ResultsStyles.listItem} key={uniqid()}>
                <Overview director={results[director]} />
                <Link
                  className={ResultsStyles.link}
                  to="/director/"
                  state={{ director: results[director] }}
                >
                  <IconButton size="medium">
                    <ArrowButton fontSize="large" />
                  </IconButton>
                </Link>
              </li>
              <Divider />
            </>
          ))}
      </ul>
    </Paper>
  );
};

Result.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Result;
