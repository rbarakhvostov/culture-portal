import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';

import 'react-responsive-carousel/lib/styles/carousel.css';
import { Carousel } from 'react-responsive-carousel';
import CarouselStyles from './gallery.module.css';

const Gallery = ({ director }) => {
  const { t } = useTranslation(director);

  return (
    <Carousel className={CarouselStyles.carousel}>
      {t('images').map((item) => (
        <div key={uniqid()} className={CarouselStyles.imageWrapper}>
          <img className={CarouselStyles.image} src={item} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

Gallery.propTypes = {
  director: PropTypes.string.isRequired,
};

export default Gallery;
