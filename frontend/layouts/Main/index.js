import React from 'react'
import Header from '../../components/Header'
import SideMenu from '../../components/SideMenu'
import Slider from '../../components/Slider'
import Stages from '../../components/Stages'
import './index.css'

const Main = ({ auth }) => (
  <div className="main">
    <div className="main__top-container">
      <Header auth={auth} />
    </div>
    <div className="main__bottom-container">
      <SideMenu />
      <Slider />
      <Stages />
    </div>
  </div>
)

export default Main
