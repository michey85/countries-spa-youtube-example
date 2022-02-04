import {SET_COUNTRY, SET_ERROR, SET_LOADING, CLEAR_DETAILS} from './details-actions';

const initialState = {
  currentCountry: null,
  status: 'idle',
  error: null,
}

export const detailsReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
        currentCountry: null,
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
    case CLEAR_DETAILS:
      return initialState;
    default:
      return state;
  }
}
