import React from 'react';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import Developer from './Developer';

const gitHubIds = ['rbarakhvostov', 'wofec', 'SvetlankaKuzyaka', 'vld-m'];

const Team = () => {
  const { t } = useTranslation('team');

  return (
    <div>
      <h1>{t('title')}</h1>
      {gitHubIds.map((id) => (
        <Developer id={id} key={uniqid()} />
      ))}
    </div>
  );
};

export default Team;
