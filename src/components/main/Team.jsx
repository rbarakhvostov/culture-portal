import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './team.module.css';
/* import ReactDOM from 'react-dom'; */

const Card = (props) => (
  <div className={styles.card}>
    <img src={props.avatar} className={styles.avatar} alt="avatar" />
    <div className={styles.description}>
      <h2 className={styles.name}>{props.name}</h2>
      <h2 className={styles.githubAccount}>{props.githubAccount}</h2>
      <p className={styles.contribution}>{props.contribution}</p>
      <a href={styles.githubLink} className={styles.githubLink}>
        githubLink
      </a>
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
          name={t('dev_name')}
          githubAccount="Github account"
          contribution={t('contribution')}
          githubLink="/link.html"
        />
        <Card
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          name={t('dev_name')}
          githubAccount="Github account2"
          contribution={t('contribution')}
          githubLink="/link.html"
        />
        <Card
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          name={t('dev_name')}
          githubAccount="Github account3"
          contribution={t('contribution')}
          githubLink="/link.html"
        />
        <Card
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          name={t('dev_name')}
          githubAccount="Github account4"
          contribution={t('contribution')}
          githubLink="/link.html"
        />
        <Card
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          name={t('dev_name')}
          githubAccount="Github account5"
          contribution={t('contribution')}
          githubLink="/link.html"
        />
      </div>
    </div>
  );
};
/* const Card = props => {
  const { t } = useTranslation('team');
   */

/*   return (
    <div>
      <h1></h1>
      <ul>
        <li>
          <h3></h3>
          <p></p>
          <a href=>
            <img src="./images/githubAccount.jpg" alt="githubAccountLink" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Team; */

/* ReactDOM.render(<TeamDescription />, document.getElementById('app')); */
