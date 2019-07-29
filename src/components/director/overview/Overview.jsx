import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import OverviewStyles from './overview.module.css';

const Overview = ({ director }) => {
  const { t } = useTranslation(director);

  return (
    <div className={OverviewStyles.overviewWrapper}>
      <img className={OverviewStyles.img} src={t('img')} alt="director image" />
      <div className={OverviewStyles.info}>
        <h1 className={OverviewStyles.name}>{t('name')}</h1>
        <span className={OverviewStyles.date}>{t('date')}</span>
        <span className={OverviewStyles.description}>{t('description')}</span>
      </div>
    </div>
  );
};

Overview.propTypes = {
  director: PropTypes.string.isRequired,
};

export default Overview;