import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';

import RenderHomePage from './RenderHomePage';
import { checkAuthentication } from '../../../api';

function HomeContainer({ LoadingComponent }) {
  const [userInfo, setUserInfo] = useState(null);
  const { authState, authService } = useOktaAuth();

  useEffect(() => {
    checkAuthentication(authState, authService, userInfo, setUserInfo);
  }, [authState, authService, userInfo, setUserInfo]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Fetching user profile..." />
      )}
      {authState.isAuthenticated && userInfo && (
        <RenderHomePage userInfo={userInfo} authService={authService} />
      )}
    </>
  );
}

export default HomeContainer;
