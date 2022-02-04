import {SET_COUNTRY, SET_ERROR, SET_LOADING, CLEAR_DETAILS, SET_NEIGHBORS} from './details-actions';

const initialState = {
  currentCountry: null,
  neighbors: [],
  status: 'idle',
  error: null,
}

export const detailsReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_LOADING:
      return {
        ...initialState,
        status: 'loading',
      }
    case SET_ERROR:
      return {
        ...state,
        status: 'error',
        error: payload,
      }
    case SET_COUNTRY:
      return {
        ...state,
        status: 'received',
        currentCountry: payload,
      }
    case SET_NEIGHBORS:
      return {
        ...state,
        neighbors: payload,
      }
    case CLEAR_DETAILS:
      return initialState;
    default:
      return state;
  }
}
