import { Link } from "react-router-dom";

import { DropdownMenu } from "../../Nav";
import citySpire from "../../../../images/cityspire.svg";

import { LOGIN, ROOT } from "../../../../api";

function RenderNavBar({ authState, userInfo, userPic, logout }) {
  return (
    <nav>
      <Link to={ROOT}>
        <div className="logo">
          <img src={citySpire} alt="CitySpire" />
        </div>
      </Link>

      <div className="button-container">
        {/* {!authState.isPending && !authState.isAuthenticated && ( */}
        <Link to={LOGIN}>
          <button>login</button>
        </Link>
        {/* )} */}
        {/* {!authState.isPending && !authState.isAuthenticated && (
          <Link to="#">
            <button>Sign Up</button>
          </Link>
        )} */}

        <DropdownMenu authState={authState} userInfo={userInfo} userPic={userPic} logout={logout} />
      </div>
    </nav>
  );
}

export default RenderNavBar;
