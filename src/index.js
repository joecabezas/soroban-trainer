import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './redux/store'

import App from './App';

import 'typeface-roboto';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

if (process.env.ENV === 'development') {
  module.hot.accept();
}
