import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './developerDay.css';

const DeveloperDay = ({ director }) => {
  const { t } = useTranslation(director);
  // const info = ['Режиссёр Дня'];
  // info.push(t('name'), t('date'), t('description'));
  return (
    <div className={styles.authorDayBlock}>
      <h2>Author of the Day</h2>
      <h3>{t('name')}</h3>
      <h4>{t('date')}</h4>
      <p>{t('description')}</p>
      <img src={t('img')} alt="author of the day" />
      <a href="google.com">go</a>
    </div>
  );
};

DeveloperDay.propTypes = {
  director: PropTypes.string.isRequired,
};

export default DeveloperDay;
