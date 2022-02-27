import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { DropdownMenu } from "../../Nav";
import logo from "../../../../images/cityspire.png";

import { LOGIN, ROOT } from "../../../../api";

function RenderNavBar({ userPic }) {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <nav>
      <Link to={ROOT} className="logo">
        <img src={logo} alt="CitySpire" />
      </Link>

      <div className="button-container">
        {!isAuthenticated && (
          <Link to="#" onClick={loginWithRedirect}>
            <button>login</button>
          </Link>
        )}

        {!isAuthenticated && (
          <a href="https://dev-p7-fg9eu.us.auth0.com/u/signup?state=hKFo2SBZdVIzVC1wOGtUakctLTlOTGZjVFprZXkzRUlFRVU2Z6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHpRampkMjZUdU95ZjYtM2wtU2tIZmpZY2k1cXlmRDFio2NpZNkgUFRMVVpDeDNobDRwRW9VcmlpWXNnckoxTXJISWhNZW8">
            <button>Sign Up</button>
          </a>
        )}

        <DropdownMenu userPic={userPic} />
      </div>
    </nav>
  );
}

export default RenderNavBar;
