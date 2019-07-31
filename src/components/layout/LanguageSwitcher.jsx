import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import getLanguege from '../../utils/i18n';

const LanguageSwitcher = () => {
  const languages = ['en', 'ru', 'by'];
  const { i18n } = useTranslation('layout');
  const [value, setValue] = useState(getLanguege());

  const handleChange = (event) => {
    setValue(event.target.value);

    i18n.changeLanguage(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      {languages.map((lang) => (
        <option key={uniqid()} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
