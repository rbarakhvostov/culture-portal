import React from 'react';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';

const Header = () => {
  const { t } = useTranslation('layout');

  return (
    <>
      <LanguageSwitcher />
      <h1>{t('title_header')}</h1>
      <Navigation />
    </>
  );
};

export default Header;
