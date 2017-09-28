import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Homepage = (props) => {
  const { isAuthenticated } = props.auth

  return (
    <div className="homepage">
      <h1>JOBBLE</h1>
      <h2>HOMEPAGE</h2>
      {
        isAuthenticated()
          ? (
            <div>
              <div className="homepage__main-link btn">
                <Link to="/main">
                  <h6>MAIN APP</h6>
                </Link>
              </div>
              <button
                className="homepage__logout-button btn"
                onClick={() => props.auth.logout()}
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <button
              className="homepage__login-button btn"
              onClick={() => props.auth.login()}
            >
              LOGIN
            </button>
          )
      }
    </div>
  )
}

export default Homepage
