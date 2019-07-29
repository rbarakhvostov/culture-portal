import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import IconGitHub from './images/icon-github.svg';
import IconWorklog from './images/icon-worklog.svg';

const Developer = ({ id }) => {
  const { t } = useTranslation('team');
  const github = `http://github.com/${id}`;
  const worklog = `http://vld-m.github.io/culture-portal/worklogs/${id}.md`;
  const avatar = `${github}.png`;

  return (
    <div>
      <img src={avatar} alt="developer avatar" />
      <h2>{t(`${id}`)}</h2>
      <a href={github}>
        <img src={IconGitHub} alt="github icon" />
      </a>
      <a href={worklog}>
        <img src={IconWorklog} alt="worklog icon" />
      </a>
    </div>
  );
};

Developer.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Developer;
