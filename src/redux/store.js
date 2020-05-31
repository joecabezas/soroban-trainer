import { combineReducers, createStore } from 'redux';

import { devToolsEnhancer} from 'redux-devtools-extension';

import configurationReducer from './reducers/configuration_reducer';
import uiReducer from './reducers/ui_reducer';

export default createStore(
  combineReducers({
    ui: uiReducer,
    config: configurationReducer
  }),
  devToolsEnhancer()
);
