import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import uniqid from 'uniqid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const getBiography = (data, matches) => {
  return data.map((item) => (
    <TimelineItem
      key={uniqid()}
      dateText={item.date}
      style={{ color: '#34515e' }}
      dateInnerStyle={{
        fontSize: `${matches ? '1rem' : '1.4rem'}`,
        fontWeight: '400',
        color: '#ffffff',
        backgroundColor: '#607d8b',
        boxShadow: '0 2.5px 5px 2.5px #00000040',
      }}
      bodyContainerStyle={{
        padding: '10px',
        fontSize: `${matches ? '0.9rem' : '1.2rem'}`,
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
  const matches = useMediaQuery('(max-width:520px)');

  return <Timeline lineColor="#dddddd">{getBiography(bio, matches)}</Timeline>;
};

Biography.propTypes = {
  bio: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Biography;
