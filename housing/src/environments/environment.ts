// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // domain: 'dev-fyo32d99.auth0.com', // Absent trailing slash matters here
  domain: 'https://dev-808810.okta.com',
  issuer: 'https://dev-808810.okta.com/oauth2/default',
  // clientID: '4z5nyCX4Jg9L7TDAUvMP0zApLQY3N4dx',
  clientID: '0oa2tzs0sNkOVRCKy4x6',
  redirectUri: 'http://localhost:4200/implicit/callback',
  audience: '/account',
  claimsDomain: 'https://revature.com/', // Trailing slash matters here
  googleMapsKey: 'AIzaSyCxYMcmEjlHQ2r2CywMgyK7YEplxurqW2A',
  endpoints: {
    account: 'http://localhost:9100/',
    complex: 'http://localhost:9110/',
    tenant:  'http://localhost:9140/',
    provider: 'http://localhost:9000/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
