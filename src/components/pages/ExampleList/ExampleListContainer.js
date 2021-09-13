import React from 'react';
import axios from 'axios';
import RenderExampleListPage from './RenderExampleListPage';

import { List } from '../../common';

// Here is an example of using our reusable List component to display some list data to the UI.
const ExampleList = () => {
  const url = 'https://jsonplaceholder.typicode.com/photos?albumId=1';

  const getExampleData = async () => {
    const res = await axios(url);
    return res.data;
  };

  return (
    <List
      // Here we are passing our Axios request helper function as a callback.
      getItemsData={getExampleData}
      // Here we are passing in a component we want to show whilst waiting for our API request
      // to complete.
      LoadingComponent={() => <div>Loading Items...</div>}
      // Here we are passing in a component that receives our new data and returns our JSX elements.
      RenderItems={RenderExampleListPage}
    />
  );
};

export default ExampleList;
