import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Homepage = () => {
  return (
    <div className='homepage'>
      <h1>JOBBLE STATIC HOMEPAGE</h1>
      <Link to='/main' className='homepage__main-link'>
        <h6>MAIN APP</h6>
      </Link>
    </div>
  );
};

export default Homepage;
