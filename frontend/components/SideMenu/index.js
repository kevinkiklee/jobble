import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const SideMenu = props => {
  return (
    <div className='SideMenu'>
      <h2>SideMenu</h2>
      <ul>
        <li>Dashboard</li>
        <li>Companies</li>
        <li>Applications</li>
        <li>Materials</li>
      </ul>
    </div>
  )
};

export default SideMenu;
