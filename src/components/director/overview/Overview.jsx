import React from 'react';
import PropTypes from 'prop-types';
import foo from '../../../utils/contentful';
import OverviewStyles from './overview.module.css';

const Overview = ({ directorId }) => {
  const data = foo(directorId);
  return (
    <div id="overview" className={OverviewStyles.overviewWrapper}>
      <img className={OverviewStyles.img} src={} alt="" />
      <div className={OverviewStyles.info}>
        <h1 className={OverviewStyles.name}>{}</h1>
        <span className={OverviewStyles.date}>{}</span>
        <span className={OverviewStyles.description}>{}</span>
      </div>
    </div>
  );
};

Overview.propTypes = {
  director: PropTypes.string.isRequired,
};

export default Overview;
