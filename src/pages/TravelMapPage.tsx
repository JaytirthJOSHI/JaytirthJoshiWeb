import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import './TravelMapPage.css';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const markers = [
  { name: "Shanghai", coordinates: [121.4737, 31.2304] as [number, number] },
  { name: "New Delhi", coordinates: [77.2090, 28.6139] as [number, number] },
  { name: "Atlanta", coordinates: [-84.3880, 33.7490] as [number, number] },
  { name: "Palanpur", coordinates: [72.4339, 24.1722] as [number, number] }
];

const TravelMapPage: React.FC = () => {
  const [tooltipContent, setTooltipContent] = useState('');

  return (
    <div className="travel-map-container">
      <h1>Where I've Lived</h1>
      <ComposableMap
        projectionConfig={{ scale: 150 }}
        data-tooltip-id="my-tooltip"
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: { fill: "#334155", outline: "none" },
                  hover: { fill: "#475569", outline: "none" },
                  pressed: { fill: "#64748B", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates }) => (
          <Marker
            key={name}
            coordinates={coordinates}
            onMouseEnter={() => {
              setTooltipContent(name);
            }}
            onMouseLeave={() => {
              setTooltipContent("");
            }}
          >
            <circle r={8} fill="#ff4136" stroke="#fff" strokeWidth={2} />
          </Marker>
        ))}
      </ComposableMap>
      <ReactTooltip id="my-tooltip" content={tooltipContent} />
    </div>
  );
};

export default TravelMapPage; 