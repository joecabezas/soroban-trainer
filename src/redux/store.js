import { combineReducers, createStore } from 'redux';

import { devToolsEnhancer} from 'redux-devtools-extension';

import configurationReducer from './reducers/configuration_reducer';

export default createStore(
  combineReducers({
    config: configurationReducer
  }),
  devToolsEnhancer()
);
