import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { setIsMobile } from '../actions/appActions';
import Main from './Main';
import Homepage from './Homepage';
import '../styles/reset.css';

class App extends Component {
  componentDidMount() {
    if (window.innerWidth < 700) {
      this.props.setIsMobile(true);
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/main' component={Main} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  isMobile: state.app.isMobile,
});

const mapDispatchToProps = dispatch => ({
  setIsMobile: isMobile => dispatch(setIsMobile(isMobile)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
