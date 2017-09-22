import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import Slider from '../../components/Slider';
import Stages from '../../components/Stages';
import './index.css';

const Main = props => {
  return (
    <div className='main'>
      <div className='main__top-container'>
        <Header />
      </div>
      <div className='main__bottom-container'>
        <SideMenu />
        <Slider />
        <Stages />
      </div>
    </div>
  )
};

export default Main;
