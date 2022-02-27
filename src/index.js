import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { LocationContextProvider } from "./state";
import { LOGIN, ROOT, MAP, HOME, FAVORITES, PROFILE_LIST } from "./api";

import { LoginPage, LandingPage, Mapbox, HomePage, Favorites, ProfileListPage } from "./components/pages";
import { Navbar, NotFoundPage } from "./components/layout";
import { LoadingComponent } from "./components/common";

import "./styles/index.css";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <Router>
      <LocationContextProvider>
        <App />
      </LocationContextProvider>
    </Router>
  </Auth0Provider>,
  document.getElementById("root")
);

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path={ROOT} exact component={LandingPage} />
        <Route path={LOGIN} component={LoginPage} />
        <Route path={MAP} component={Mapbox} />
        <Route path={HOME} component={() => <HomePage LoadingComponent={LoadingComponent} />} />
        <Route path={FAVORITES} component={Favorites} />
        <Route path={PROFILE_LIST} component={ProfileListPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
