import axios from 'axios';

import { searchByCountry } from '../../config';

export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_COUNTRY = '@@details/SET_COUNTRY';
export const CLEAR_DETAILS = '@@details/CLEAR'

const setLoading = () => ({
  type: SET_LOADING
})

const setError = () => ({
  type: SET_ERROR
})

const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
})

export const clearDetails = () => ({
  type: CLEAR_DETAILS
})

export const loadCountryByName = (name, controller) => (dispatch) => {
  dispatch(setLoading());

  const config = {};
  if (controller) {
    config.signal = controller.signal;
  }

  axios.get(searchByCountry(name), config)
    .then(({ data }) => {
      dispatch(setCountry(data[0]))
    })
    .catch((err) => {
      dispatch(setError(err.message));
    })
}
