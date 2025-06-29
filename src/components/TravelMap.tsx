import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

interface Location {
  position: [number, number];
  name: string;
}

const locations: Location[] = [
  { position: [33.95, -84.55], name: 'Marietta, GA, USA' },
  { position: [31.23, 121.47], name: 'Shanghai, China' },
  { position: [24.17, 72.43], name: 'Palanpur, India' },
  { position: [28.61, 77.20], name: 'Sirohi / Delhi Area, India' },
  { position: [47.60, -122.33], name: 'Seattle, WA, USA' },
];

const mapContainerStyle = {
    height: '400px',
    width: '100%',
    borderRadius: '4px',
    border: '1px solid #13314c'
};

const TravelMap: React.FC = () => {
  return (
    <MapContainer center={[25, 20]} zoom={2} style={mapContainerStyle}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default TravelMap; 