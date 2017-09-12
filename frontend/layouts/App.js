import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { setIsMobile } from '../actions/appActions';
import Main from './Main';
import Homepage from './Homepage';
import AuthCallback from './AuthCallback';
import Auth from '../utils/authUtil';

import '../styles/reset.css';

class App extends Component {
  constructor() {
    super();
    this.auth = new Auth();
  }

  componentDidMount() {
    if (window.innerWidth < 700) {
      this.props.setIsMobile(true);
    }
  }

  handleAuthentication(nextState, replace) {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      this.auth.handleAuthentication();
    }
  }

  render() {
    return (
      <Switch>
        <Route 
          path='/main' 
          render={props => <Main auth={this.auth} {...props} />}
        />
        <Route 
          exact
          path='/' 
          render={props => <Homepage auth={this.auth} {...props} />}
        />
        <Route 
          path="/callback" 
          render={props => {
            this.handleAuthentication(props);
            return <AuthCallback {...props} /> 
          }}
        />
      </Switch>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isMobile: state.app.isMobile,
});

const mapDispatchToProps = dispatch => ({
  setIsMobile: isMobile => dispatch(setIsMobile(isMobile)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App)
);
