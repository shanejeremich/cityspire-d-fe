import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSignOutAlt, faUserCircle, faSearchLocation } from "@fortawesome/free-solid-svg-icons";

import { FAVORITES, HOME, MAP } from "../../../../api";

function RenderDropdownMenu({ userPic, activeClick, isActive, dropdownRef }) {
  const { user, logout } = useAuth0();
  return (
    <>
      {user ? (
        <div className="menu-container">
          <button onClick={activeClick} className="menu-trigger">
            <span>{user.name}</span>
            <img src={user.picture || userPic} alt="user pic" className="user-pic" />
          </button>
          <div ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
            <ul>
              <li>
                <Link to={MAP} className="menu-item" onClick={activeClick}>
                  <FontAwesomeIcon icon={faSearchLocation} />
                  &nbsp;&nbsp; Search City
                </Link>
              </li>
              <li>
                <Link to={HOME} className="menu-item" onClick={activeClick}>
                  <FontAwesomeIcon icon={faUserCircle} />
                  &nbsp;&nbsp; Profile
                </Link>
              </li>
              <li>
                <Link to={FAVORITES} className="menu-item" onClick={activeClick}>
                  <FontAwesomeIcon icon={faHeart} />
                  &nbsp;&nbsp; Favorites
                </Link>
              </li>
              <li>
                <div className="menu-item" onClick={logout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  &nbsp;&nbsp; Logout
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default RenderDropdownMenu;
