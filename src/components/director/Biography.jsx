import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

const getBiography = (data) => {
  return data.map((item) => (
    <TimelineItem
      key={uniqid()}
      dateText={item.date}
      style={{ color: 'rgb(10, 7, 7)' }}
      dateInnerStyle={{
        background:
          'linear-gradient(45deg, rgb(116, 99, 99) 30%, rgb(10, 7, 7) 90%)',
        color: '#ffffff',
        fontSize: '1.2rem',
      }}
      bodyContainerStyle={{
        padding: '10px',
        borderRadius: '8px',
        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <p>{item.description}</p>
    </TimelineItem>
  ));
};

const Biography = ({ bio }) => {
  return <Timeline lineColor="#ddd">{getBiography(bio)}</Timeline>;
};

Biography.propTypes = {
  bio: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Biography;
