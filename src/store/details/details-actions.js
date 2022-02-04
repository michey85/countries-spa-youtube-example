export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_COUNTRY = '@@details/SET_COUNTRY';
export const CLEAR_DETAILS = '@@details/CLEAR';
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS';

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

const setNeighbors = (countries) => ({
  type: SET_NEIGHBORS,
  payload: countries,
});

export const clearDetails = () => ({
  type: CLEAR_DETAILS
})


export const loadCountryByName = (name, controller) => (dispatch, _, {client, api}) => {
  dispatch(setLoading());

  const config = {};
  if (controller) {
    config.signal = controller.signal;
  }

  client.get(api.searchByCountry(name), config)
    .then(({ data }) => {
      dispatch(setCountry(data[0]))
    })
    .catch((err) => {
      dispatch(setError(err.message));
    })
}

export const loadNeighborsByBorders = (borders) => (dispatch, _, {client, api}) => {
  client.get(api.filterByCode(borders))
    .then(({ data }) => dispatch(setNeighbors(data.map((c) => c.name))))
    .catch(console.log)
}
