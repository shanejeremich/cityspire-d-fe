import { Link } from "react-router-dom";

import { Button } from "../../common";

import { PROFILE_LIST } from "../../../api";

function RenderHomePage(props) {
  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          <Link to={PROFILE_LIST}>Profiles Example</Link>
        </p>
        <p>
          <Button handleClick={() => authService.logout()} buttonText="Logout" />
        </p>
      </div>
    </div>
  );
}
export default RenderHomePage;
