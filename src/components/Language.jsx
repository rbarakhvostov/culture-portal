import React, { useState } from 'react';

const Language = () => {
  const [value, setValue] = useState('eng');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      <option value="en">EN</option>
      <option value="ru">RU</option>
      <option value="by">BY</option>
    </select>
  );
};

export default Language;
