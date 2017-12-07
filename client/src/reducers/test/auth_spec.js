import {expect} from 'chai';
import reducer from '../auth';

describe('auth reducer', () => {

  it('Handles AUTH', () => {
    const initialState = {
      token: null,
      email: null,
      roles: [],
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null
    };

    const newState = reducer(initialState, {
      type: 'AUTH',
      payload: {email: 'test@example.com'}});

    expect(newState).to.eql({
      token: null,
      email: 'test@example.com',
      roles: [],
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null
    });

  });

  it('Handles AUTH_SUCCESS', () => {


    const initialState = {
      token: null,
      email: 'test@example.com',
      roles: [],
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null
    };

    const newState = reducer(initialState, {
      type: 'AUTH_SUCCESS',
      payload: {
        token: '1234',
        user: {
          email: 'admin@admin.com',
          roles: ['admin']
        }
      }
    });

    expect(newState).to.eql({
      token: '1234',
      email: 'admin@admin.com',
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      roles: ['admin'],
      error: null
    });

  });

  it('Handles AUTH_FAIL', () => {

    const initialState = {
      token: null,
      email: null,
      authFetch: true,
      authFailed: false,
      errorMessage: null,
      error: null
    };

    const newState = reducer(initialState, {
      type: 'AUTH_FAIL',
      payload: {
        statusText: 'An Error Occurred',
        status: 500
      }
    });

    expect(newState).to.eql({
      token: null,
      email: null,
      authFetch: false,
      authFailed: true,
      errorMessage: 'An Error Occurred',
      error: 500
    });
  });

  it('Handles auth AUTH_LOGOUT', () => {
    const initialState = {
      token: '1234',
      email: 'admin@admin.com',
      roles: [],
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null,
      logoutFetch: false
    };

    const newState = reducer(initialState, {
      type: 'AUTH_LOGOUT'
    });

    expect(newState).to.eql({
      token: '1234',
      email: 'admin@admin.com',
      roles: [],
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null,
      logoutFetch: true
    });
  });

  it('Handles auth AUTH_LOGOUT_SUCCESS', () => {
    const initialState = {
      token: '1234',
      email: 'email@email.com',
      authFetch: false,
      roles: [],
      authFailed: false,
      errorMessage: null,
      error: null,
      logoutFetch: true
    };

    const newState = reducer(initialState, {
      type: 'AUTH_LOGOUT_SUCCESS'
    });

    expect(newState).to.eql({
      token: null,
      email: null,
      roles: [],
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null,
      logoutFetch: false
    });
  });

  it('Handles auth AUTH_LOGOUT_FAIL', () => {
    const initialState = {
      token: '1234',
      email: 'admin@admin.com',
      roles: [],
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null,
      logoutFetch: false,
      logoutFetchFail: false
    };

    const newState = reducer(initialState, {
      type: 'AUTH_LOGOUT_FAIL'
    });

    expect(newState).to.eql({
      token: '1234',
      email: 'admin@admin.com',
      authFetch: false,
      authFailed: false,
      errorMessage: null,
      error: null,
      logoutFetch: false,
      logoutFetchFail: true,
      roles: []
    });
  });
});
