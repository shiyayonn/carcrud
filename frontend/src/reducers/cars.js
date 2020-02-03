import _ from 'lodash';
import { GET_CARS, ADD_CAR ,GET_CAR,DELETE_CAR, EDIT_CAR} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_CARS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
      case GET_CAR:
      case ADD_CAR: // added
      return {
        ...state,
        [action.payload.id]: action.payload
      };
      case DELETE_CAR:
        return _.omit(state, action.payload);
      case EDIT_CAR:
        return {
          ...state,
          [action.payload.id]: action.payload
        };
    default:
      return state;
  }
};