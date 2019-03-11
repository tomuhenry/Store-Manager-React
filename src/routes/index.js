import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';

const Routes = () => (
  <Router>
    <div>
      <Route exact path='/home' component={HomeView} />
      <Route exact path='/' component={LoginView} />
    </div>
  </Router>
);

export default Routes;
