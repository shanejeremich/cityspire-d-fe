import React from 'react';

function RenderMapbox({ mapContainerRef }) {
  return (
    <div>
      <div id="geocoder" className="geocoder"></div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
}

export default RenderMapbox;
