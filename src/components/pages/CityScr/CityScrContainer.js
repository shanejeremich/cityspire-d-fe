import React from 'react';

import RenderCityScr from './RenderCityScrjs';

import './CityScr.css';

function CityScrContainer({ input, locations }) {
  return (
    <>
      {locations !== null && input ? (
        <RenderCityScr locations={locations} input={input} />
      ) : null}
    </>
  );
}

export default CityScrContainer;
