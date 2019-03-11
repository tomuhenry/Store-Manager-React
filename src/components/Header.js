import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className='header'>
    <nav id='nav-bar'>
      <span className='nav-links'>
        <NavLink
          to='/'
          onClick={() => {
            localStorage.removeItem('access_token');
          }}
        >
          Logout
        </NavLink>
        &nbsp;
        <NavLink to='/home'>Home</NavLink>
        &nbsp;
        <NavLink to='/register'>Add User</NavLink>
      </span>
    </nav>
  </div>
);

export default Header;
