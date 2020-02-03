import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import cars from './cars';

export default combineReducers({
  form: formReducer,
  cars
});