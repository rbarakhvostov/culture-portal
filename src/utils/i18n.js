import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const backendConfig = {
  loadPath: '/locales/{{lng}}/{{ns}}.json',
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnObjects: true,
    debug: true,
    fallbackLng: 'en',
    backend: backendConfig,
  });

const getLanguage = () => i18n.language.slice(0, 2);

export default getLanguage;
