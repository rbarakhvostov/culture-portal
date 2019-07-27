import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

function getBiography(data) {
  return data.map((item) => (
    <TimelineItem
      key={uniqid()}
      dateText={item.date}
      dateInnerStyle={{
        background: `#${(0x1000000 + Math.random() * 0xffffff)
          .toString(16)
          .substr(1, 6)}`,
      }}
    >
      <p>{item.description}</p>
    </TimelineItem>
  ));
}

const Biography = ({ director }) => {
  const { t } = useTranslation(director);

  return <Timeline lineColor="#ddd">{getBiography(t('bio'))}</Timeline>;
};

Biography.propTypes = {
  director: PropTypes.string.isRequired,
};

export default Biography;
