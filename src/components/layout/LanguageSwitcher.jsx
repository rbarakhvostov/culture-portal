import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';

const LanguageSwitcher = () => {
  const languages = ['en', 'ru', 'by'];
  const { i18n } = useTranslation();
  const [value, setValue] = useState(i18n.language);

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
