import React from 'react';
import { useOktaAuth } from '@okta/okta-react';

import { mainAxios } from '../../../api';
import { PROFILES } from '../../../api/CONSTANTS';

import { List } from '../../common';

import RenderProfileListPage from './RenderProfileListPage';

// Here is an example of using our reusable List component to display some list data to the UI.
const ProfileList = () => {
  const { authState } = useOktaAuth();

  const getAuthHeader = authState => {
    if (!authState.isAuthenticated) {
      throw new Error('Not authenticated');
    }
    return { Authorization: `Bearer ${authState.idToken}` };
  };
  const apiAuthGet = authHeader => {
    return mainAxios.get(PROFILES, { headers: authHeader });
  };
  const getProfileData = async authState => {
    try {
      const response = await apiAuthGet(getAuthHeader(authState));
      return response.data;
    } catch (error) {
      return new Promise(() => {
        console.log(error);
        return [];
      });
    }
  };

  return (
    <List
      // Here we are passing our Axios request helper function as a callback.
      getItemsData={() => getProfileData(authState)}
      // Here we are passing in a component we want to show whilst waiting for our API request
      // to complete.
      LoadingComponent={() => <div>Loading Profiles...</div>}
      // Here we are passing in a component that receives our new data and returns our JSX elements.
      RenderItems={RenderProfileListPage}
    />
  );
};

export default ProfileList;
