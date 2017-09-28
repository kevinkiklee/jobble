import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/store'
import './styles/reset.css'
import Root from './layouts/Root'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root')

  const preloadedState = {
    app: {
      isMobile: false,
    },
  }

  const store = configureStore(preloadedState)

  if (process.env.NODE_ENV !== 'production') {
    window.store = store
  }

  render(<Root store={store} />, root)
})
