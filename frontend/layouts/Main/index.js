import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Main = props => {
  return (
    <div className='main'>
      <h1>JOBBLE</h1>
      <h2>MAIN APPLICATION</h2>
      <div className='main__homepage-link btn'>
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

export default Main;
