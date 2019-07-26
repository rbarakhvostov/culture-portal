import React from 'react';

import { useTranslation } from 'react-i18next';
import './carousel.css';

const Carousel = (director) => {
  const { t } = useTranslation(director);

  const arr = [];

  t('images').forEach((item) =>
    arr.push(<img className="director-img" src={item} alt="" />)
  );

  return <div>{arr}</div>;
};

export default Carousel;

// TODO add carousel
