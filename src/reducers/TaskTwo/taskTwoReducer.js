import { TASK_TWO_DATA, CLEAR_STATE_VALUE } from '../../constants/ActionTypes';

let intialData = {
  data: null,
  fetching: true
};

export default function reducer(state = intialData, action) {
  switch(action.type) {
    case TASK_TWO_DATA:       
      state = {
        ...state,
        data: action.payload.data,
        fetching: action.payload.fetching,
      }; 
      break;  
    case CLEAR_STATE_VALUE:            
      state = {
        ...state,
        data: action.payload.data,
        fetching: action.payload.fetching,
      };
      break;   
    default:
      break;
  }
  return state;
};
