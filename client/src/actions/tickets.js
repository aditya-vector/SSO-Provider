import { routeActions } from 'react-router-redux';

import * as Api from '../utils/ApiClient';

export const ADD_TICKET = 'ADD_TICKET';
export const SHOW_TICKET = 'SHOW_TICKET';

const addTickets = (data) => ({
  type: ADD_TICKET,
  payload: data
});

const showTicket = (data) => ({
  type: SHOW_TICKET,
  payload: data
});

export const fetchTickets = () => (dispatch) => {
  Api.getTickets(sessionStorage.getItem('token'))
  .then((response) => {
    if (response.status === 200) {
      response.json().then(json => {
        dispatch(addTickets(json));
      });
    } else {
      // dispatch(failedLogin(response));
    }
  });
};

export const fetchTicket = (ticketId) => (dispatch) => {
  Api.getTicket(sessionStorage.getItem('token'), ticketId)
  .then((response) => {
    if (response.status === 200) {
      response.json().then(json => {
        dispatch(showTicket(json));
      });
    } else {
      // dispatch(failedLogin(response));
    }
  });
};

export const updateTicket = ({data}) => (dispatch) => {
  Api.changeTicket(data)
  .then(() => {
    dispatch(routeActions.push('/'));
  });
};
