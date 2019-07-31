import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import uniqid from 'uniqid';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import getData from '../../../utils/contentful';
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

const Map = ({ id }) => {
  const [data, setData] = useState(null);

  const lng = data.lng === 'en' || undefined ? 'en' : 'ru';

  useEffect(() => {
    async function foo() {
      const directorData = await getData(id);
      setData(directorData);
    }
    foo();
  }, [id]);

  if (data === null) return <div>Loading</div>;

  return (
    <YMaps query={{ lang: lng }}>
      <YMap className={mapStyle.map} state={mapState(data.mapData[0])}>
        {data.mapData.map((item) => generatePlacemark(item))}
      </YMap>
    </YMaps>
  );
};

Map.propTypes = {
  director: PropTypes.string.isRequired,
};

mapState.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
};

generatePlacemark.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  title: PropTypes.string.isRequired,
};

export default Map;
