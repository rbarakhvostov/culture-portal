import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useDirectorData from '../../../utils/getDirectorData';
import useDirectorsImages from '../../../utils/useDirectorsImages';
import OverviewStyles from './overview.module.css';

const Overview = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const directorData = await useDirectorData(id);
      setData(directorData);
    };
    if (typeof id !== 'object') {
      fetchData();
    } else setData(id);
  }, [id]);

  if (data === null) return null;

  const images = useDirectorsImages();

  return (
    <div id="overview" className={OverviewStyles.overviewWrapper}>
      <img className={OverviewStyles.img} src={images[data.path].main} alt="" />
      <div className={OverviewStyles.info}>
        <h1 className={OverviewStyles.name}>{data.name}</h1>
        <span className={OverviewStyles.date}>{data.date}</span>
        <span className={OverviewStyles.description}>{data.description}</span>
      </div>
    </div>
  );
};

Overview.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.objectOf(PropTypes.any).isRequired,
  ]).isRequired,
};

export default Overview;
