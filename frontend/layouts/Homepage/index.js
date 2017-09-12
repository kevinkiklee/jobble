import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/authUtil';
import './index.css';

const Homepage = (props) => {
  const { isAuthenticated } = props.auth;
  
  return (
    <div className='homepage'>
      <h1>JOBBLE STATIC HOMEPAGE</h1>
      <Link to='/main' className='homepage__main-link'>
        <h6>MAIN APP</h6>
      </Link>
      {
        !isAuthenticated() && (
          <button
            className='homepage__login-button'
            onClick={() => props.auth.login()}
          >
            LOGIN
          </button>
        )
      }
      {
        isAuthenticated() && (
          <button
            className='homepage__login-button'
            onClick={() => props.auth.logout()}
          >
            LOGOUT
          </button>
        )
      }
    </div>
  );
};

export default Homepage;
