import React from 'react';

import { useTranslation } from 'react-i18next';
import generateWork from './directorpage/Work'
import generateBio from './directorpage/Bio'
import generateImages from './directorpage/Images'
import generateOverview from './directorpage/Overview'

function DirectorPage(curDir) {
  return (
    <>
      {generateOverview(curDir)}
      {generateBio(curDir)}
      {generateWork(curDir)}
      {generateImages(curDir)}
    </>
  );
}

export default DirectorPage;