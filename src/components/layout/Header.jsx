import React from 'react';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';
import Menu from './Menu';

const Header = () => {
  const { t } = useTranslation('layout');

  return (
    <>
      <LanguageSwitcher />
      <h1>{t('title_header')}</h1>
      <Navigation />
      <Menu />
    </>
  );
};

export default Header;
