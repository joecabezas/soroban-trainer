import 'typeface-roboto';

import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
);

if (process.env.ENV === 'development') {
  module.hot.accept();
}
