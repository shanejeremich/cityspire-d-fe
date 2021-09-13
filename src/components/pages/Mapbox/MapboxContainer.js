import React, { useRef, useEffect, useState, useContext } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import RenderMapbox from './RenderMapbox';
import { LocationContext } from '../../../state';
import { CityScr } from '../CityScr';

import './Mapbox.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

function MapboxContainer() {
  const [input, setInput] = useState('');
  const { locations } = useContext(LocationContext);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99, 40],
      zoom: 3.3,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      countries: 'us',
      mapboxgl: mapboxgl,
    });

    geocoder.on('result', function(result) {
      setInput(result.result.text);
    });

    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
    map.resize();

    return () => map.remove();
  }, []);

  return (
    <>
      <RenderMapbox mapContainerRef={mapContainerRef} />
      <CityScr input={input} locations={locations} />
    </>
  );
}
export default MapboxContainer;
