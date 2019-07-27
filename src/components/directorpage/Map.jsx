import React from 'react';
import { YMaps, Map as YMap, Placemark, getObject } from 'react-yandex-maps';
import { useTranslation } from 'react-i18next';
import './map.css';

const mapState = ({ coords, title }) => ({
    center: coords[0], 
    zoom: 16 
  }
);

const getPlaceMark = ({ coords, title }) => ({
  geometry: coords[0],
  properties: {
    hintContent: title,
    balloonContent: 'Это балун'
  },

  modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
});

const Map = (director) => {
  const { t } = useTranslation(director);

  const lng = t('lng') === 'en' ? 'en' : 'ru';
  const arr = t('mapData');
  console.log(lng);

  const currentMapState = mapState(arr[0]);
  const placeMark = getPlaceMark(arr[0]);
  console.log(currentMapState, placeMark)

  const A = () => <YMaps query={{ lang: lng }} />;
  console.log(A);
  return (
    <A>
      <YMap state={currentMapState}>
        <Placemark {...placeMark} />
      </YMap>
    </A>
  );
};

export default Map;
