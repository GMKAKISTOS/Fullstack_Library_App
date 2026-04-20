export const auth0Config = {
 clientId: 'CYcf525mT4rf8TLjbrucxWOilMHJSryk',
 issuer: 'dev-e3w5ib6e5s42p3e7.us.auth0.com',
 audience: "http://localhost:8080",
 redirectUri: 'http://localhost:3000/login/callback',
 scope: 'openid profile email'
 //scope: ['openid', 'profile', 'email'],
 //pkce: true,
 //disableHttpsCheck: true
}