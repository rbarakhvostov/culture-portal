import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import getLanguege from '../../../utils/i18n';
import mapStyle from './map.module.css';

const mapState = ({ coords }) => ({
  center: coords,
  zoom: 17,
});

const generatePlacemark = ({ coords, title }) => {
  const props = {
    geometry: coords,
    properties: {
      hintContent: title,
    },

    modules: ['geoObject.addon.hint'],
  };

  return <Placemark {...props} key={uniqid()} />;
};

const Map = ({ mapData }) => {
  const lng = getLanguege() === 'en' ? 'en' : 'ru';

  return (
    <YMaps query={{ lang: lng }}>
      <YMap className={mapStyle.map} state={mapState(mapData[0])}>
        {mapData.map((item) => generatePlacemark(item))}
      </YMap>
    </YMaps>
  );
};

Map.propTypes = {
  mapData: PropTypes.arrayOf(PropTypes.any).isRequired,
};

mapState.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
};

generatePlacemark.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  title: PropTypes.string.isRequired,
};

export default Map;
