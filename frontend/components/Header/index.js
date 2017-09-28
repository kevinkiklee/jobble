import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = props => (
  <div className="header u-flex-center">
    <div className="header__left-container">
      <div className="header__logo">
        <h2>JOBBLE</h2>
      </div>
    </div>
    <div className="header__right-container u-flex-center">
      <div className="header__homepage-link btn">
        <Link to="/">
          <h6>HOMEPAGE</h6>
        </Link>
      </div>
      <button
        className="homepage__logout-button btn"
        onClick={() => props.auth.logout()}
      >
        LOGOUT
      </button>
    </div>
  </div>
)

export default Header
