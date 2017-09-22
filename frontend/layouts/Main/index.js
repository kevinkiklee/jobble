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
      <h1>JOBBLE</h1>
      <Header />
      <SideMenu />
      <Slider />
      <Stages />
    </div>
  )
};

export default Main;
