import {createReducer} from '../utils';
import {
  ADD_TICKET, SHOW_TICKET
} from '../actions/tickets';


const initialState = {ticketList: [], currentTicket: {}};

export default createReducer(initialState, {
  [ADD_TICKET]: (state, tickets) => {
    return Object.assign({}, state, {
      ticketList: tickets
    });
  },
  [SHOW_TICKET]: (state, ticket) => {
    return Object.assign({}, state, {
      currentTicket: ticket
    });
  }
});
