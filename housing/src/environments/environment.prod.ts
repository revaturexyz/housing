export const environment = {
  production: true,
  domain: 'https://dev-837913.okta.com/oauth2/default', // Absent trailing slash matters here
  clientID: '0oa2d72hlcH7CUgwf357',
  redirectUri: 'http://account.southcentralus.cloudapp.azure.com/implicit/callback',
  audience: '/account',
  claimsDomain: 'https://revature.com/', // Trailing slash matters here
  googleMapsKey: 'AIzaSyCxYMcmEjlHQ2r2CywMgyK7YEplxurqW2A',
  endpoints: {
    // account: 'https://account-aspnet-dev.azurewebsites.net/',
    // complex: 'https://complex-aspnet-dev.azurewebsites.net/',
    // tenant: 'https://tenant-aspnet-dev.azurewebsites.net/',
    // provider: 'http://localhost:10080/'
    account: 'http://account.southcentralus.cloudapp.azure.com/',
    complex: 'http://complex.southcentralus.cloudapp.azure.com/',
    tenant: 'http://tenant.southcentralus.cloudapp.azure.com/',
    provider: 'http://housing.southcentralus.cloudapp.azure.com/'
  }
};
