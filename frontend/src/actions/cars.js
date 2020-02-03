import axios from 'axios';
import { reset } from 'redux-form'; 
import { GET_CARS,ADD_CAR, GET_CAR, DELETE_CAR, EDIT_CAR } from './types';
import history from '../history'; // added
// GET TODOS
export const getCars = () => async dispatch => {
  const res = await axios.get('/api/cars/');
  dispatch({
    type: GET_CARS,
    payload: res.data
  });
};

export const addcar = formValues => async dispatch => {
  const res = await axios.post('/api/cars/', { ...formValues });
  dispatch({
    type: ADD_CAR,
    payload: res.data
  });
  dispatch(reset('carForm'));
};

export const getCar = id => async dispatch => { // added
  const res = await axios.get(`/api/cars/${id}/`);
  dispatch({
    type: GET_CAR,
    payload: res.data
  });
};

export const deleteCar = id => async dispatch => { // added
  await axios.delete(`/api/cars/${id}/`);
  dispatch({
    type: DELETE_CAR,
    payload: id
  });
history.push('/')};


export const editCar = (id, formValues) => async dispatch => {
  const res = await axios.patch(`/api/cars/${id}/`, formValues);
  dispatch({
    type: EDIT_CAR,
    payload: res.data
  });
  history.push('/');
};