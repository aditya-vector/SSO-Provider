import { routeActions } from 'react-router-redux';
import * as Api from '../utils/ApiClient';
export const AUTH = 'AUTH';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAIL = 'AUTH_FAIL';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS';
export const AUTH_LOGOUT_FAIL = 'AUTH_LOGOUT_FAIL';

const auth = (email) => ({type: AUTH, payload: {email}});

const loggedIn = (data) => ({
  type: AUTH_SUCCESS,
  payload: data
});

const failedLogin = (data) => ({
  type: AUTH_FAIL,
  payload: data
});


const _logout = () => ({ type: AUTH_LOGOUT });

const _logoutFail = (err) => ({
  type: AUTH_LOGOUT_FAIL,
  payload: err
});

const _logoutSuccess = () => ({
  type: AUTH_LOGOUT_SUCCESS
});

export const login = ({email, password}) => (dispatch) => {
  dispatch(auth(email));
  Api.login(email, password)
  .then((response) => {
    if (response.status === 200) {
      response.json().then(json => {
        const user = {email: email, roles: json.roles};
        dispatch(loggedIn({token: json.auth_token, user: user}));
        sessionStorage.setItem('token', json.auth_token);
        sessionStorage.setItem('user', JSON.stringify(user));
        dispatch(routeActions.push('/'));
      });
    } else {
      dispatch(failedLogin(response));
    }
  });
};

export const logout = () => (dispatch) => {
  dispatch(_logout());
  Api.logout()
  .then(() => {
    dispatch(_logoutSuccess());
    dispatch(routeActions.replace('/login'));
    sessionStorage.removeItem('token');
  })
  .catch((err) => dispatch(_logoutFail(err)));
};

export const loginCheckToken = () => (dispatch) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    const user = JSON.parse(sessionStorage.getItem('user'));
    dispatch(loggedIn({token, user}));
  } else {
    dispatch(routeActions.replace('/login'));
  }
};
