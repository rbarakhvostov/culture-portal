import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import uniqid from 'uniqid';
import { useTranslation } from 'react-i18next';
import getLangueage from '../../utils/i18n';
import Overview from '../director/overview/Overview';
import useDirectorId from '../../utils/getDirectorId';
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

  return (
    <ul className={ResultsStyles.results}>
      {Object.keys(results)
        .filter((director) =>
          directorsData[director][lng]
            .toLowerCase()
            .includes(filter.toLowerCase())
        )
        .map((director) => {
          const id = useDirectorId(director);

          return (
            <li className={ResultsStyles.listItem} key={director}>
              <Link
                className={ResultsStyles.link}
                to="/director/"
                state={{ director }}
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
