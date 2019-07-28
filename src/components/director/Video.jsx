import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import { useTranslation } from 'react-i18next';
import videoStyle from './video.module.css';
import './video.css';

const Video = ({ director }) => {
  const { t } = useTranslation([director,'layout']);

  const [isOpen, openModal] = useState(false);

  return (
    <div className={videoStyle.video}>
      <button
        className={videoStyle.videoButton}
        onClick={() => openModal(!isOpen)}
      >
        {t('layout:video_button')}
      </button>
      <ModalVideo
        isOpen={isOpen}
        onClose={() => openModal(!isOpen)}
        channel='youtube'
        videoId={t('video')}
      >
      </ModalVideo>
    </div>
  )
}

export default Video;
