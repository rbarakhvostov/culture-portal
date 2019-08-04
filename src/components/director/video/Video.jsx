import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalVideo from 'react-modal-video';
import VideoIcon from '@material-ui/icons/Videocam';

import { useTranslation } from 'react-i18next';
import videoStyle from './video.module.css';
import './video.css';

const Video = ({ video }) => {
  const { t } = useTranslation('layout');

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={videoStyle.video}>
      <button
        type="button"
        className={videoStyle.videoButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        <VideoIcon fontSize="large" className={videoStyle.videoIcon} />
        {t('layout:video_button')}
      </button>
      <ModalVideo
        isOpen={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        channel="youtube"
        videoId={video}
      />
    </div>
  );
};

Video.propTypes = {
  video: PropTypes.string.isRequired,
};

export default Video;
