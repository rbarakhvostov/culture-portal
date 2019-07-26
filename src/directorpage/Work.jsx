import React from 'react';

import { useTranslation } from 'react-i18next';

const Work = (director) => {
  const { t } = useTranslation(director);

  const arr = [];

  t('work').forEach((item) =>
    arr.push(
      <>
        <h3>{item.product.title}</h3>
        <h4>{item.product.author}</h4>
        <span>{item.date}</span>
        <span>{item.role}</span>
      </>
    )
  );

  return <div>{arr}</div>;
}

export default Work;
