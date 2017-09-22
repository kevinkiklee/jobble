import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = props => {
  return (
    <div className='header'>
      <h2>Header</h2>
      <div className='Header__homepage-link btn'>
        <Link to='/'>
          <h6>HOMEPAGE</h6>
        </Link>
      </div>
      <div
        className='homepage__logout-button btn'
        onClick={() => props.auth.logout()}
      >
        LOGOUT
      </div>
    </div>
  )
};

export default Header;
