import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const SideMenu = props => {
  return (
    <div className='side-menu'>
      <ul>
        <li className='side-menu__item side-menu__dashboard'>
          Dashboard
        </li>
        <li className='side-menu__item side-menu__companies'>
          Companies
        </li>
        <li className='side-menu__item side-menu__applications'>
          Applications
        </li>
        <li className='side-menu__item side-menu__materials'>
          Materials
        </li>
      </ul>
    </div>
  )
};

export default SideMenu;
