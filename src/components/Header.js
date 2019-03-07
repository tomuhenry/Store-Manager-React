import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <NavLink to='/' onClick={() => localStorage.removeItem('token')}>Logout</NavLink>
    &nbsp;
    <NavLink to='/home'>Home</NavLink>
    &nbsp;
  </div>
);

export default Header;
