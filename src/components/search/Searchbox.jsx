import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Searchbox = ({ value, onChange }) => {
  const input = useRef(null);

  const handleChange = (event) => onChange(event.target.value);

  useEffect(() => {
    input.current.focus();
  });

  return (
    <input type="text" value={value} onChange={handleChange} ref={input} />
  );
};

Searchbox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Searchbox;
