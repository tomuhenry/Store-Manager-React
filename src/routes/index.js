import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import SignupView from '../views/SignupView';

const Routes = () => (
  <Router>
    <div>
      <ToastContainer />
      <Route exact path='/home' component={HomeView} />
      <Route exact path='/register' component={SignupView} />
      <Route exact path='/' component={LoginView} />
    </div>
  </Router>
);

export default Routes;
