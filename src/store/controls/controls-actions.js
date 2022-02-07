export const SET_SEARCH = '@@controls/SET_SEARCH';
export const SET_REGION = '@@controls/SET_REGION';
export const CLEAR_CONTROLS = '@@controls/CLEAR_CONTROLS';

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search
})

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
})

export const clearControls = () => ({
  type: CLEAR_CONTROLS,
})
