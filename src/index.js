import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/index';
import store from './store/combineStore';

ReactDOM.render(
  <Provider store={store}>
  <Routes />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
