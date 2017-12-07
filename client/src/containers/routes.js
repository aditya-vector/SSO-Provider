import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import { loginCheckToken } from '../actions/auth';
import ProtectedRoute from './ProtectedRoute';
import AuthLayout from './AuthLayout';
import MainLayout from './MainLayout';
import Login from './Login';
import Home from './Home';
import NotFound from './NotFound';
import EditTicket from './EditTicket';

class Root extends Component {

  componentWillMount() {
    this.props.loginCheckToken();
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path={'/login'} component={AuthLayout}>
          <IndexRoute component={Login}/>
          <Route path={'*'} component={NotFound}/>
        </Route>
        <Route path={'/'} component={MainLayout}>
          <IndexRoute component={ProtectedRoute(Home)} />
          <Route path={'/tickets/:id'} component={ProtectedRoute(EditTicket)} />
          <Route path={'*'} component={ProtectedRoute(NotFound)}/>
        </Route>
      </Router>
      );
  }
}

Root.propTypes = {
  loginCheckToken: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  loginCheckToken: bindActionCreators(loginCheckToken, dispatch)
});

export default connect(null, mapDispatchToProps)(Root);
