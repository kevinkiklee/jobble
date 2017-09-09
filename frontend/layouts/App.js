import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setIsMobile } from '../actions/appActions';

import '../styles/reset.css';

class App extends Component {
  componentDidMount() {
    if (window.innerWidth < 700) {
      this.props.setIsMobile(true);
    }
  }

  render() {
    return (
      <h1>
        JOBBLE
      </h1>
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
