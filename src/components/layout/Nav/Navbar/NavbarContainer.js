import React, { useEffect, useState } from "react";

import RenderNavbar from "./RenderNavbar";

import { userAvatar } from "../../../../api";

import "./NavbarContainer.css";

export default function NavbarContainer() {
  const [userPic, setUserPic] = useState("");

  useEffect(() => {
    userAvatar().then(res => {
      const pic = res.results[0].picture.thumbnail;
      setUserPic(pic);
    });
  }, []);

  return (
    <div>
      <RenderNavbar userPic={userPic} />
    </div>
  );
}
