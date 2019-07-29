import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby';
import useDirectorsNamespaces from '../../utils/useDirectorsNamespaces';
import DirectorOfTheDayStyles from './directorOfTheDay.module.css';
// import Overview from '../director/overview/Overview';

const DirectorOfTheDay = () => {
  let author;
  const day = new Date();
  const namespaces = useDirectorsNamespaces();
  if (day.getDay() === 1 || day.getDay() === 4) [author] = [namespaces[0]];
  if (day.getDay() === 2 || day.getDay() === 6) [author] = [namespaces[1]];
  if (day.getDay() === 3) [author] = [namespaces[2]];
  if (day.getDay() === 5) [author] = [namespaces[3]];
  if (day.getDay() === 0) [author] = [namespaces[4]];
  const { t } = useTranslation(author);
  return (
    <div className={DirectorOfTheDayStyles.authorBlock}>
      <h2 className={DirectorOfTheDayStyles.blockTitle}>
        {t('layout:title-author-block')}
      </h2>
      <h3 className={DirectorOfTheDayStyles.authorName}>{t('name')}</h3>
      <h4 className={DirectorOfTheDayStyles.authorDate}>{t('date')}</h4>
      <p className={DirectorOfTheDayStyles.authorDescr}>{t('description')}</p>
      <img
        className={DirectorOfTheDayStyles.authorImg}
        src={t('img')}
        alt="author of the day"
        height="250"
        width="188"
      />
      <Link
        to="/director/"
        state={{ director: author }}
        className={DirectorOfTheDayStyles.blockButton}
      >
        {t('layout:button-author-block')}
      </Link>
    </div>
  );
};

export default DirectorOfTheDay;
