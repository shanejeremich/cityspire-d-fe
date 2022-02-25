import React, { createContext, useEffect, useState } from "react";
import { LOCATIONS, fetchData } from "../../api";

export const LocationContext = createContext();

export const LocationContextProvider = props => {
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    fetchData(`${LOCATIONS}`).then(res => setLocations(res));
  }, []);

  return <LocationContext.Provider value={{ locations }}>{props.children}</LocationContext.Provider>;
};
