import {ipcRenderer} from 'electron';
import * as types from './store/mutation-types';

export const init = (store) => {
  ipcRenderer.on('github-oauth-reply', (event, {access_token}) => {
    store.commit(types.SET_ACCESS_TOKEN, access_token);
    store.dispatch('getUser').then(user => {
      store.commit(types.AUTHENTICATED, user);
    });
  });
}
