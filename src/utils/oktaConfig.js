const REDIRECT_URI = `${window.location.origin}/cityspire-d-fe/login/callback`;

const config = {
  issuer: process.env.REACT_APP_OKTA_ISSUER_URI,
  redirectUri: REDIRECT_URI,
  clientId: process.env.REACT_APP_CLIENT_ID,
  pkce: true,
  scopes: ['openid', 'email', 'profile'],
};

export { config };
