import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/index';
import store from './store/combineStore';
import 'react-toastify/dist/ReactToastify.min.css'
import './css/login.css';

const token = localStorage.getItem('access_token');
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};

ReactDOM.render(
  <Provider store={store}>
  <Routes />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
