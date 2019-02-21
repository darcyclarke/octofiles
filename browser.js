import {ipcRenderer} from 'electron';

ipcRenderer.send('github-oauth', 'getToken');
