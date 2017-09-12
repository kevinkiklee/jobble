import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Main = () => {
  return (
    <div className='main'>
      <h1>JOBBLE MAIN APPLICATION</h1>
      <Link to='/' className='main__homepage-link'>
        <h6>HOMEPAGE LINK</h6>
      </Link>
    </div>
  )
};

export default Main;
