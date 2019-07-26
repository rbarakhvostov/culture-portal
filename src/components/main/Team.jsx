import React from 'react';
import { useTranslation } from 'react-i18next';
/* import ReactDOM from 'react-dom'; */

const Team = () => {
  const { t } = useTranslation('team');

  return (
    <div>
      <h1>{t('dev_team')}</h1>
      <ul>
        <li>
          <img src="./images/photo1.jpg" alt="Avatar" />
          <h2>{t('dev_name')}</h2>
          <h3>Github account</h3>
          <p>{t('contribution')}</p>
          <a href="/link.html">
            <img src="./images/githubAccount.jpg" alt="githubAccountLink" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Team;

/* ReactDOM.render(<TeamDescription />, document.getElementById('app')); */
