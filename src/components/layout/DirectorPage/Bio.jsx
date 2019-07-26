import React from 'react';

function generateBio(bio) {
  const arr = [];
  bio.forEach((item) =>
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
