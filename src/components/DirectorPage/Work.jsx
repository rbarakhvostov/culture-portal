import React from 'react';

function generateWork(work) {
  const arr = [];
  work.forEach((item) =>
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

export default generateWork;
