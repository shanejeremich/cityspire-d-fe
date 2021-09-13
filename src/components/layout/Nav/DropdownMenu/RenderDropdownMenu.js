import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faSignOutAlt,
  faUserCircle,
  faSearchLocation,
} from '@fortawesome/free-solid-svg-icons';
import { FAVORITES, HOME, MAP } from '../../../../api/CONSTANTS';

function RenderDropdownMenu({
  userInfo,
  userPic,
  logout,
  activeClick,
  isActive,
  dropdownRef,
}) {
  return (
    <>
      {userInfo ? (
        <div className="menu-container">
          <button onClick={activeClick} className="menu-trigger">
            <span>{userInfo.name}</span>
            <img src={userPic} alt="user pic" className="user-pic" />
          </button>
          <div
            ref={dropdownRef}
            className={`menu ${isActive ? 'active' : 'inactive'}`}
          >
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
                <Link
                  to={FAVORITES}
                  className="menu-item"
                  onClick={activeClick}
                >
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
        ''
      )}
    </>
  );
}

export default RenderDropdownMenu;
