import React from 'react';
import { Link } from 'react-router-dom';
import { DATA_VIS, EXAMPLE_LIST, PROFILE_LIST } from '../../../api/CONSTANTS';
import { Button } from '../../common';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          {/* This is an example of a common example of how we'd like for you to
          approach components */}
        </p>
        <p>
          <Link to={PROFILE_LIST}>Profiles Example</Link>
        </p>
        <p>
          <Link to={EXAMPLE_LIST}>Example List of Items</Link>
        </p>
        <p>
          <Link to={DATA_VIS}>Data Visualizations Example</Link>
        </p>
        <p>
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
