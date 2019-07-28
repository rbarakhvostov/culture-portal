import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './developerDay.module.css';

const DeveloperDay = ({ director }) => {
  const { t } = useTranslation([director, 'layout']);
  return (
    <div className={styles.authorBlock}>
      <h2 className={styles.blockTitle}>{t('layout:title-author-block')}</h2>
      <h3 className={styles.authorName}>{t('name')}</h3>
      <h4 className={styles.authorDate}>{t('date')}</h4>
      <p className={styles.authorDescr}>{t('description')}</p>
      <img
        className={styles.authorImg}
        src={t('img')}
        alt="author of the day"
        height="250"
        width="188"
      />
      <a className={styles.blockButton} href="google.com">
        {t('layout:button-author-block')}
      </a>
    </div>
  );
};

DeveloperDay.propTypes = {
  director: PropTypes.string.isRequired,
};

export default DeveloperDay;
