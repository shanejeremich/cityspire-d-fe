import React, { useContext, useEffect, useRef, useState } from "react";

import RenderFavoritesPage from "./RenderFavoritesPage";

import { LocationContext } from "../../../state";
import { USER_LOCATIONS, checkAuthentication, fetchAuthData } from "../../../api";

import "./Favorites.css";

const FavoritesContainer = () => {
  // const [userInfo, setUserInfo] = useState(null);
  const [userLocations, setUserLocations] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const { locations } = useContext(LocationContext);
  // let userId = useRef(null);

  // useEffect(() => {
  //   if (!userInfo) {
  //     checkAuthentication(authState, authService, userInfo, setUserInfo);
  //   } else if (userInfo !== null && userInfo) {
  //     userId.current = userInfo.sub;
  //     fetchAuthData(`${USER_LOCATIONS}${userId.current}`, authState)
  //       .then(res => setUserLocations(res))
  //       .finally(() => setIsLoading(!isLoading));
  //   }
  //   // eslint-disable-next-line
  // }, [authState, authService, userInfo, setUserInfo]);

  return (
    <>
      {!isLoading && (
        <RenderFavoritesPage
          userLocations={userLocations}
          locations={locations}
          isShown={isShown}
          setIsShown={setIsShown}
        />
      )}
    </>
  );
};
export default FavoritesContainer;
