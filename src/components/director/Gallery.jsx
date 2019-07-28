import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const list = (imglink) => (
  <div>
    <img src={imglink} alt="" />
  </div>
);

const Gallery = ({ director }) => {
  const { t } = useTranslation(director);

  return <Carousel>{t('images').map((item) => list(item))}</Carousel>;
};

Gallery.propTypes = {
  director: PropTypes.string.isRequired,
};

export default Gallery;
