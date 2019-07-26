import React from 'react';

import { useTranslation } from 'react-i18next';

const Overview = (director) => {
  console.log(director);
	const { t } = useTranslation(director);
  return (
    <>
      <div>
        <h2>{t('name')}</h2>
        <p>{t('date')}</p>
        <p>{t('city')}</p>
        <p>{t('description')}</p>
        <img src={t('img')} alt="Pic" />
      </div>
    </>
  );
}

export default Overview;
