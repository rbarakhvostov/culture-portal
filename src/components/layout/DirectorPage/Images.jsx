import React from 'react';
import './images.css';

function generateImages(images) {
  const arr = [];
  images.forEach((item) =>
    arr.push(<img className="director-img" src={item} alt="" />)
  );
  return <div>{arr}</div>;
}

export default generateImages;

// TODO add carousel
