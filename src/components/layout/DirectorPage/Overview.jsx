import React from 'react';

import { useTranslation } from 'react-i18next';

function generateOverview(curDir) {
	const { t } = useTranslation(curDir);

  return (
    <>
      <h2>{t('name')}</h2>
      <p>{t('date')}</p>
      <p>{t('city')}</p>
      <p>{t('description')}</p>
      <img src={t('img')} alt="Pic" />
    </>
  );
}

export default generateOverview;
