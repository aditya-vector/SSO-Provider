import {createReducer} from '../utils';
import {
  AUTH, AUTH_SUCCESS, AUTH_FAIL,
  AUTH_LOGOUT, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAIL
} from '../actions/auth';

export default createReducer({
  token: null,
  email: '',
  roles: [],
  authFetch: false,
  authFailed: false,
  errorMessage: null,
  error: null,
  logoutFetch: false
}, {
  [AUTH]: (state, {email}) => {
    return Object.assign({}, state, {
      authFetch: true,
      email
    });
  },
  [AUTH_SUCCESS]: (state, {token, user}) => {
    return Object.assign({}, state, {
      token,
      authFetch: false,
      email: user.email,
      roles: user.roles
    });
  },
  [AUTH_FAIL]: (state, {status, statusText}) => {
    return Object.assign({}, state, {
      errorMessage: statusText, // ensure it works this is the format of the phone app api.
      error: status,
      authFetch: false,
      authFailed: true
    });
  },
  [AUTH_LOGOUT]: (state) => {
    return Object.assign({}, state, {
      logoutFetch: true
    });
  },
  [AUTH_LOGOUT_SUCCESS]: (state) => {
    return Object.assign({}, state, {
      logoutFetch: false,
      token: null,
      email: null
    });
  },
  [AUTH_LOGOUT_FAIL]: (state) => {
    return Object.assign({}, state, {
      logoutFetchFail: true
    });
  }
});
