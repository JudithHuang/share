import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

import config from './config';
import { Engine } from './engine/index';

import './index.css';
import 'todomvc-app-css/index.css';

Engine.init({
  config
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
