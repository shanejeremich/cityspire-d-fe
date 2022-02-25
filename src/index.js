import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, useHistory, Switch } from "react-router-dom";
import { LocationContextProvider } from "./state";
import { LOGIN, ROOT, MAP, HOME, FAVORITES, PROFILE_LIST, CALLBACK_PATH } from "./api";

import { LoginPage, LandingPage, Mapbox, HomePage, Favorites, ProfileListPage } from "./components/pages";
import { Navbar, NotFoundPage } from "./components/layout";
import { LoadingComponent } from "./components/common";

import "./styles/index.css";

ReactDOM.render(
  <StrictMode>
    <Router>
      <LocationContextProvider>
        <App />
      </LocationContextProvider>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

function App() {
  const history = useHistory();
  const authHandler = () => {
    history.push(LOGIN);
  };

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
