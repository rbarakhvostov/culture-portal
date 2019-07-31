import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getData from '../../../utils/contentful';
import OverviewStyles from './overview.module.css';

const Overview = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function foo() {
      const directorData = await getData(id);
      setData(directorData);
    }
    foo();
  }, [id]);

  if (data === null)
    return (
      <div id="overview" className={OverviewStyles.overviewWrapper}>
        Loading
      </div>
    );

  return (
    <div id="overview" className={OverviewStyles.overviewWrapper}>
      <img className={OverviewStyles.img} src={data.img} alt="" />
      <div className={OverviewStyles.info}>
        <h1 className={OverviewStyles.name}>{data.path}</h1>
        <span className={OverviewStyles.date}>{data.date}</span>
        <span className={OverviewStyles.description}>{data.description}</span>
      </div>
    </div>
  );
};

Overview.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Overview;
