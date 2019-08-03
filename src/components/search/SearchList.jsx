import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import uniqid from 'uniqid';
import getLangueage from '../../utils/i18n';
import Overview from '../director/overview/Overview';
import getDirectorId from '../../utils/getDirectorId';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import ResultsStyles from './results.module.css';

const getResults = (filter) => {
  console.log('call');
  const directorsData = useDirectorsNamespaces();
  const namespaces = Object.keys(directorsData);
  const lng = getLangueage();
  const results = {};

  namespaces.forEach((director) => {
    const prop = {
      [director]: directorsData[director][lng],
    };

    Object.assign(results, prop);
  });

  const result = Object.keys(results).filter((director) =>
    directorsData[director][lng].toLowerCase().includes(filter.toLowerCase())
  );

  return result;
};

const Result = ({ filter }) => {
  console.log('call');
  const result = getResults(filter);
  result.map((director) => {
    const id = getDirectorId(director);

    return (
      <li className={ResultsStyles.listItem} key={uniqid()}>
        <Link
          className={ResultsStyles.link}
          to="/director/"
          state={{ director }}
        >
          <Overview id={id} />
        </Link>
      </li>
    );
  });
};


const Search = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <input type="text" value={query} onChange={getResults(query)} ref={input} />
      <ul className={ResultsStyles.results} key={uniqid()}>
        <Result filter={query} />
      </ul>
    </>
  );
};

// Result.propTypes = {
//   filter: PropTypes.string.isRequired,
// };

// Searchbox.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Search;
