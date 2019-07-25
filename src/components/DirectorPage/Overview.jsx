import React from 'react';

function generateOverview(name, date, description, city, imgUrl) {
  return (
    <>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{city}</p>
      <p>{description}</p>
      <img src={imgUrl} alt="Pic" />
    </>
  );
}

export default generateOverview;
