import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './team.module.css';

const Card = (props) => (
  <div className={styles.card}>
    <img src={props.avatar} className={styles.avatar} alt="avatar" />
    <div className={styles.description}>
      <h2 className={styles.name}>{props.name}</h2>
      <h2 className={styles.githubAccount}>{props.githubAccount}</h2>
      <a href={props.githubLink} className={styles.githubLink}>
        <svg
          className={styles.githubLogo}
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          viewBox="0 0 291.32 291.32"
        >
          <g>
            <path d="M145.66,0C65.219,0,0,65.219,0,145.66c0,80.45,65.219,145.66,145.66,145.66   s145.66-65.21,145.66-145.66C291.319,65.219,226.1,0,145.66,0z M186.462,256.625c-0.838-11.398-1.775-25.518-1.83-31.235   c-0.364-4.388-0.838-15.549-11.434-22.677c42.068-3.523,62.087-26.774,63.526-57.499c1.202-17.497-5.754-32.883-18.107-45.3   c0.628-13.282-0.401-29.023-1.256-35.941c-9.486-2.731-31.608,8.949-37.79,13.947c-13.037-5.062-44.945-6.837-64.336,0   c-13.747-9.668-29.396-15.64-37.926-13.974c-7.875,17.452-2.813,33.948-1.275,35.914c-10.142,9.268-24.289,20.675-20.447,44.572   c6.163,35.04,30.816,53.94,70.508,58.564c-8.466,1.73-9.896,8.048-10.606,10.788c-26.656,10.997-34.275-6.791-37.644-11.425   c-11.188-13.847-21.23-9.832-21.849-9.614c-0.601,0.218-1.056,1.092-0.992,1.511c0.564,2.986,6.655,6.018,6.955,6.263   c8.257,6.154,11.316,17.27,13.2,20.438c11.844,19.473,39.374,11.398,39.638,11.562c0.018,1.702-0.191,16.032-0.355,27.184   C64.245,245.992,27.311,200.2,27.311,145.66c0-65.365,52.984-118.348,118.348-118.348S264.008,80.295,264.008,145.66   C264.008,196.668,231.69,239.992,186.462,256.625z" />
          </g>
        </svg>
      </a>
      <p className={styles.contribution}>{props.contribution}</p>
    </div>
  </div>
);

export default () => {
  const { t } = useTranslation('layout');

  return (
    <div className={styles.team}>
      <h1>{t('dev_team')}</h1>
      <div className={styles.container}>
        <Card
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          name={t('first_dev_name')}
          githubAccount="SvetlankaKuzyaka"
          contribution={t('first_dev_contribution')}
          githubLink="https://github.com/SvetlankaKuzyaka"
        />
        <Card
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          name={t('second_dev_name')}
          githubAccount="Github account2"
          contribution={t('second_dev_contribution')}
          githubLink="/link.html"
        />
        <Card
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          name={t('third_dev_name')}
          githubAccount="vld-m"
          contribution={t('third_dev_contribution')}
          githubLink="https://github.com/vld-m"
        />
        <Card
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          name={t('fourth_dev_name')}
          githubAccount="wofec"
          contribution={t('fourth_dev_contribution')}
          githubLink="https://github.com/wofec"
        />
      </div>
    </div>
  );
};
