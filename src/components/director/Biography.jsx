import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

const getBiography = (data) => {
  return data.map((item) => (
    <TimelineItem
      key={uniqid()}
      dateText={item.date}
      style={{ color: '#1e2a30' }}
      dateInnerStyle={{
        background: 'linear-gradient(45deg, #607d8b 30%, #1e2a30 90%)',
        color: '#ffffff',
        fontSize: '0.7em',
      }}
      bodyContainerStyle={{
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0.5em 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        fontSize: '0.5em',
        textAlign: 'justify',
      }}
    >
      <p>{item.description}</p>
    </TimelineItem>
  ));
};

const Biography = ({ director }) => {
  const { t } = useTranslation(director);

  return <Timeline lineColor="#ddd">{getBiography(t('bio'))}</Timeline>;
};

Biography.propTypes = {
  director: PropTypes.string.isRequired,
};

export default Biography;
