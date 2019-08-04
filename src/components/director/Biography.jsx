import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import uniqid from 'uniqid';

const getBiography = (data) => {
  return data.map((item) => (
    <TimelineItem
      key={uniqid()}
      dateText={item.date}
      style={{ color: '#34515e' }}
      dateInnerStyle={{
        fontSize: '18px',
        fontWeight: '400',
        color: '#ffffff',
        backgroundColor: '#607d8b',
        boxShadow: '0 2.5px 5px 2.5px #00000040',
      }}
      bodyContainerStyle={{
        padding: '10px',
        fontSize: '16px',
        textAlign: 'justify',
        boxShadow: '0 2.5px 5px 2.5px #00000040',
        borderRadius: '5px',
      }}
    >
      <p>{item.description}</p>
    </TimelineItem>
  ));
};

const Biography = ({ bio }) => {
  return <Timeline lineColor="#dddddd">{getBiography(bio)}</Timeline>;
};

Biography.propTypes = {
  bio: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Biography;
