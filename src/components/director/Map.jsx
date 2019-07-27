import React from 'react';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import { useTranslation } from 'react-i18next';
import mapStyle from './map.module.css';

const mapState = ({ coords }) => ({
  center: coords[0],
  zoom: 16,
});

const getPlaceMarksProps = (arr) =>
  arr.map(({ coords, title }) => ({
    geometry: coords[0],
    properties: {
      hintContent: title,
    },

    modules: ['geoObject.addon.hint'],
  }));

const Map = (director) => {
  const { t } = useTranslation(director);
  const currentMapState = mapState(t('mapData')[0]);

  const placeMarksProps = getPlaceMarksProps(t('mapData'));

  const lng = t('lng') === 'en' ? 'en' : 'ru';

  return (
    <YMaps className="hellow" query={{ lang: lng }}>
      <YMap className={mapStyle.map} state={currentMapState}>
        {placeMarksProps.map((props) => (
          <Placemark {...props} />
        ))}
      </YMap>
    </YMaps>
  );
};

export default Map;
