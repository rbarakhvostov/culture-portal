import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './map.css';

const position = [51.505, -0.09];

const map = () => (
  <Map center={position} zoom={25}>
    <TileLayer
      attribution='Map data &copy; <a href="https://api.tiles.mapbox.com/v4/{mapbox.streets}/{z}/{x}/{y}.png?access_token={pk.eyJ1Ijoid29mZWMiLCJhIjoiY2p5azdwa3lxMDg0bTNpbmM5Z2c0ZzdoeSJ9.WX8O_rpKl5-Lsz7aBmjXgA}">OpenStreetMap</a> contributors,
      <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
      Imagery © <a href="http://mapbox.com">Mapbox</a>'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>A pretty CSS3 popup.</Popup>
    </Marker>
  </Map>
);

export default map;
