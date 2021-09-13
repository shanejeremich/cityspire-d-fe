import { CALLBACK_PATH } from '../api/CONSTANTS';

const REDIRECT_URI = `${window.location.origin}${CALLBACK_PATH}`;

const config = {
  issuer: process.env.REACT_APP_OKTA_ISSUER_URI,
  redirectUri: REDIRECT_URI,
  clientId: process.env.REACT_APP_CLIENT_ID,
  pkce: true,
  scopes: ['openid', 'email', 'profile'],
};

export { config };
