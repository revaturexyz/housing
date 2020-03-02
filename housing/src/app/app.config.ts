// const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env;
import { environment } from 'src/environments/environment';

export const config = {
  oidc: {
    clientId: environment.clientID,
    issuer: environment.issuer,
    redirectUri: environment.redirectUri,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    testing: {
      // disableHttpsCheck: `${OKTA_TESTING_DISABLEHTTPSCHECK}`
    },
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  }
};
