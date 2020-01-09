export const environment = {
  production: true,
  domain: 'https://dev-837913.okta.com/oauth2/default', // Absent trailing slash matters here
  clientID: '0oa2d72hlcH7CUgwf357',
  redirectUri: 'https://housing-angular-dev.azurewebsites.net/implicit/callback',
  audience: '/account',
  claimsDomain: 'https://revature.com/', // Trailing slash matters here
  googleMapsKey: 'AIzaSyCxYMcmEjlHQ2r2CywMgyK7YEplxurqW2A',
  endpoints: {
    account: 'https://account-aspnet-dev.azurewebsites.net/',
    complex: 'https://complex-aspnet-dev.azurewebsites.net/',
    tenant: 'https://tenant-aspnet-dev.azurewebsites.net/',
    provider: 'https://housing-angular-dev.azurewebsites.net/'
  }
};
