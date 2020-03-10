export const environment = {
  production: true,
  issuer: 'https://dev-808810.okta.com/oauth2/default', // Absent trailing slash matters here
  domain: 'https://dev-808810.okta.com',
  clientID: '0oa2d72hlcH7CUgwf357',
  redirectUri: 'https://housing-angular-dev.azurewebsites.net/implicit/callback',
  audience: '/account',
  claimsDomain: 'https://revature.com/', // Trailing slash matters here
  googleMapsKey: 'AIzaSyCxYMcmEjlHQ2r2CywMgyK7YEplxurqW2A',
  endpoints: {
    account: 'https://account-aspnet-dev.azurewebsites.net/',
    lodging: 'https://complex-aspnet-dev.azurewebsites.net/',
    tenant: 'https://tenant-aspnet-dev.azurewebsites.net/',
    provider: 'https://housing-angular-dev.azurewebsites.net/'
  }
};
