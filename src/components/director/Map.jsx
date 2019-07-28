import React from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import mapStyle from './map.module.css';

const mapState = ({ coords }) => ({
  center: coords[0],
  zoom: 17,
});

const generatePlacemark = ({ coords, title }) => {
  const props = {
    geometry: coords[0],
    properties: {
      hintContent: title,
    },

    modules: ['geoObject.addon.hint'],
  };

  return <Placemark {...props} key={uniqid()} />;
};

const Map = (director) => {
  const { t } = useTranslation(director);

  const lng = t('lng') === 'en' ? 'en' : 'ru';

  return (
    <YMaps query={{ lang: lng }}>
      <YMap className={mapStyle.map} state={mapState(t('mapData')[0])}>
        {t('mapData').map((item) => generatePlacemark(item))}
      </YMap>
    </YMaps>
  );
};

mapState.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
};

generatePlacemark.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  title: PropTypes.string.isRequired,
};

export default Map;
