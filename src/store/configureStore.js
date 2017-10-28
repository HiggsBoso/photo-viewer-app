const redux = require('redux');
import { accessTokenReducer, photosReducer, userIdReducer } from 'reducers';

export var configure = (initialState = {}) => {
  let reducer = redux.combineReducers({
    photos: photosReducer,
    userId: userIdReducer,
    access_token: accessTokenReducer
  });

  let store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtenstion ? window.devToolsExtenstion() : f => f
  ));

  return store;
}
