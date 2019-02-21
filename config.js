
module.exports = {
  sources: {
    repoUrl: 'https://github.com/darcyclarke/octopics'
  },
  oauth: {
    clientId: process.env.GITHUB_CLIENT_ID || '6c21a6152598e243ea55',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || '689f7e108ae3a1cfdf7076a6102f716456e53820',
    authorizationUrl: 'http://github.com/login/oauth/authorize',
    tokenUrl: 'https://github.com/login/oauth/access_token',
    useBasicAuthorizationHeader: false,
    // don't touch me
    redirectUri: 'http://localhost'
  }
};
