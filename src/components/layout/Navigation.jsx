import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation('layout');

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t('link_main-page')}</Link>
        </li>
        <li>
          <Link to="/search/">{t('link_search')}</Link>
        </li>
        <li>
          <Link to="/director/">{t('link_director')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
