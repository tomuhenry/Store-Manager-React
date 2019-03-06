import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <NavLink to='/'>Home</NavLink>
    &nbsp;
    <NavLink to='/login'>Login</NavLink>
  </div>
);

export default Header;