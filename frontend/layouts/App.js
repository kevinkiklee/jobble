import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
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
          <Route path='/main' component={Main} />
          <Route exact path='/' component={Homepage} />
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App)
);
