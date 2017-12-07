import {combineReducers} from 'redux';
import {routeReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import tickets from './tickets';
import auth from './auth';

export default combineReducers({
  auth,
  tickets,
  routing: routeReducer,
  form: formReducer
});
