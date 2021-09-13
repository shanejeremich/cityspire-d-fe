import React, { createContext, useEffect, useState } from 'react';
import { fetchData } from '../../api';
import { LOCATIONS } from '../../api/CONSTANTS';

export const LocationContext = createContext();

export const LocationContextProvider = props => {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetchData(`${LOCATIONS}`).then(res => setLocations(res));
  }, []);

  return (
    <LocationContext.Provider value={{ locations }}>
      {props.children}
    </LocationContext.Provider>
  );
};
