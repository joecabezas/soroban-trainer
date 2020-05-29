import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-roboto';

import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);

if (process.env.ENV === 'development') {
  console.log('DEVELOPMENT MODE');
  module.hot.accept();
}
