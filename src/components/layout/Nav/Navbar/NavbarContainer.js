import React, { useEffect, useState } from "react";

import RenderNavbar from "./RenderNavbar";

import { userAvatar, checkAuthentication } from "../../../../api";

import "./NavbarContainer.css";

export default function NavbarContainer() {
  const [userInfo, setUserInfo] = useState(null);
  const [userPic, setUserPic] = useState("");

  const logout = async () => authService.logout();

  // useEffect(() => {
  //   // checkAuthentication(authState, authService, userInfo, setUserInfo);
  //   userAvatar().then(res => {
  //     const pic = res.results[0].picture.thumbnail;
  //     setUserPic(pic);
  //   });
  // }, [authState, authService, userInfo, setUserInfo]);

  return (
    <div>
      <RenderNavbar userInfo={userInfo} userPic={userPic} logout={logout} />
    </div>
  );
}
