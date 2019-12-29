// This api will come in the next version

import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  //  issuer: 'https://steyer-identity-server.azurewebsites.net/identity',

  // // URL of the SPA to redirect the user to after login
  // redirectUri: window.location.origin + '/index.html',

  // // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'spa-demo',

  // // set the scope for the permissions the client should request
  // // The first three are defined by OIDC. The 4th is a usecase-specific one
  // scope: 'openid profile email voucher',

  // Url of the Identity Provider
  // issuer: 'http://localhost:8080/login',
  // // URL of the SPA to redirect the user to after login
  // redirectUri: window.location.origin + '/index.html',

  // // URL of the SPA to redirect the user after silent refresh
  // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

  // // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'sampleClientId',

  // // set the scope for the permissions the client should request
  // // The first three are defined by OIDC. The 4th is a usecase-specific one
  // scope: 'read write foo bar',

 loginUrl: 'http://localhost:8080/oauth/authorize',
  redirectUri: window.location.origin + '/',
  userinfoEndpoint: 'http://localhost:8080/rest/users/userinfo',
  clientId: 'sampleClientId',
  scope: 'read write',
  showDebugInformation: true,
  requireHttps: false,
  logoutUrl: window.location.origin + '/',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  postLogoutRedirectUri:window.location.origin + '/',
  oidc: false
};
