import React from 'react';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import { useTranslation } from 'react-i18next';
import './map.css';

const Map = (director) => {
  const { t } = useTranslation(director);

  return (
    <YMaps>
      <div>
        <YMap className="map" defaultState={{ center: t('mapData'), zoom: 14 }}>
          <Placemark geometry={t('mapData')} />
        </YMap>
      </div>
    </YMaps>
  );
};

export default Map;
