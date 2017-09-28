import React from 'react'
import './index.css'

const SideMenu = () => (
  <div className="side-menu">
    <ul>
      <li className="side-menu__item side-menu__dashboard">
        Dashboard
      </li>
      <li className="side-menu__item side-menu__companies">
        Companies
      </li>
      <li className="side-menu__item side-menu__applications">
        Applications
      </li>
      <li className="side-menu__item side-menu__materials">
        Materials
      </li>
    </ul>
  </div>
)

export default SideMenu
