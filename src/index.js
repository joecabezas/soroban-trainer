import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';

import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);

if (process.env.ENV === 'development') {
  module.hot.accept();
}
