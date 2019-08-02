import React from 'react';
import { useTranslation } from 'react-i18next';
import Search from './Search';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';

const SearchBlock = () => {
  const directorsData = useDirectorsNamespaces();
  const { t } = useTranslation();
  return <Search directorsData={directorsData} />;
};

export default SearchBlock;
