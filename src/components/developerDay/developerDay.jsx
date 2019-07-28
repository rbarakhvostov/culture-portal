import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const DeveloperDay = ({ director }) => {
  const { t } = useTranslation(director);
  const info = [];
  t('bio').forEach((item) =>
    info.push(
      <>
        <div>{item.date}</div>
        <div>{item.description}</div>
      </>
    )
  );

  return <div>{info}</div>;
};

DeveloperDay.propTypes = {
  director: PropTypes.string.isRequired,
};

export default DeveloperDay;
