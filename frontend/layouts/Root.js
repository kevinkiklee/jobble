import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from '../utils/history';
import App from './App';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
};

export default Root;
