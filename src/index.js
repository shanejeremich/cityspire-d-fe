import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import { config } from './utils/oktaConfig';

import {
  LOGIN,
  ROOT,
  MAP,
  HOME,
  EXAMPLE_LIST,
  FAVORITES,
  PROFILE_LIST,
  DATA_VIS,
  CALLBACK_PATH,
} from './api/CONSTANTS';

import {
  LoginPage,
  LandingPage,
  Mapbox,
  HomePage,
  ExampleListPage,
  Favorites,
  ProfileListPage,
  ExampleDataViz,
} from './components/pages';
import { Navbar, NotFoundPage } from './components/layout';
import { LoadingComponent } from './components/common';

import { LocationContextProvider } from './state/contexts/LocationContext';

import './styles/index.css';

ReactDOM.render(
  <StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <LocationContextProvider>
        <App />
      </LocationContextProvider>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);

function App() {
  const history = useHistory();
  const authHandler = () => {
    history.push(LOGIN);
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Navbar />

      <Switch>
        <Route path={ROOT} exact component={LandingPage} />
        <Route path={LOGIN} component={LoginPage} />
        <Route path={MAP} component={Mapbox} />

        <SecureRoute
          path={HOME}
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute path={EXAMPLE_LIST} component={ExampleListPage} />
        <SecureRoute path={FAVORITES} component={Favorites} />
        <SecureRoute path={PROFILE_LIST} component={ProfileListPage} />
        <SecureRoute path={DATA_VIS} component={ExampleDataViz} />

        <Route path={CALLBACK_PATH} component={LoginCallback} />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
