import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Main from 'Main';
import Auth from 'Auth';

import 'react-select/dist/react-select.css';

let store = require('configureStore').configure();

store.subscribe(() => {
  let state = store.getState();
  console.log('New state', state);
});

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app-root'));
