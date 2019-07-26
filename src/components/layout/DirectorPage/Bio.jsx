import React from 'react';

import { useTranslation } from 'react-i18next';

function generateBio(curDir) {
  const { t } = useTranslation(curDir);

  const arr = [];

  t('bio').forEach((item) =>
    arr.push(
      <>
        <div>{item.date}</div>
        <div>{item.description}</div>
      </>
    )
  );

  return <div>{arr}</div>;
}

export default generateBio;
