import {app, ipcMain, BrowserWindow, Menu} from 'electron';
const electronOauth2 = require('electron-oauth2');
const oauthConfig = require('./config').oauth;
const windowParams = {
  alwaysOnTop: true,
  autoHideMenuBar: true,
  webPreferences: {
    nodeIntegration: false
  }
};
const githubOAuth = electronOauth2(oauthConfig, windowParams);

ipcMain.on('github-oauth', (event, arg) => {
  githubOAuth.getAccessToken({})
    .then(token => {
      event.sender.send('github-oauth-reply', token);
    }, err => {
      console.log('Error while getting token', err);
    });
});
