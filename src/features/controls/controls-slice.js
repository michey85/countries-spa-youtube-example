import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  search: '',
  region: '',
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  }
});

export const {setRegion, setSearch, clearControls} = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;

// selectors
export const selectControls = (state) => state.controls;
export const selectSearch = (state) => state.controls.search;
export const selectRegion = (state) => state.controls.region;
