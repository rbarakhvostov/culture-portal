import React from 'react';

import { useTranslation } from 'react-i18next';
import './images.css';

function generateImages(curDir) {
	const { t } = useTranslation(curDir);

  const arr = [];

  t('images').forEach((item) =>
    arr.push(<img className="director-img" src={item} alt="" />)
  );

  return <div>{arr}</div>;
}

export default generateImages;

// TODO add carousel