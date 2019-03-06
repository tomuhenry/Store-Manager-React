import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const title = 'Store Manager App';

ReactDOM.render(
  <div><App /></div>,
  document.getElementById('app')
);

module.hot.accept();