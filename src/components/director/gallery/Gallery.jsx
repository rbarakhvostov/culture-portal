import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { Carousel } from 'react-responsive-carousel';
import getDirectorsImages from '../../../utils/getDirectorsImages';
import CarouselStyles from './gallery.module.css';
import './carousel.css';

const Gallery = ({ path }) => {
  const images = getDirectorsImages();

  return (
    <Carousel className={CarouselStyles.carousel}>
      {images[path].gallery.map((item) => (
        <div key={uniqid()} className={CarouselStyles.imageWrapper}>
          <img className={CarouselStyles.image} src={item} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

Gallery.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Gallery;
