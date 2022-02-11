import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadCoutries = createAsyncThunk(
  '@@countries/loadCountries',
  async (_, {extra: {client, api}}) => {
    return client.get(api.ALL_COUNTRIES);
  }
);


const initialState = {
  status: 'idle', // 'loading', 'received', 'rejected'
  error: null,
  list: [],
};

const countriesSlice = createSlice({
  name: '@@countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCoutries.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loadCoutries.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(loadCoutries.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload.data;
      })
  }
});

export const countriesReducer = countriesSlice.reducer;

// selectors
export const selectVisibleCountries = (state, {search = '', region = ''} = {}) => {
  return state.countries.list.filter(country => (
    country.region.includes(region) && country.name.toLowerCase().includes(search.toLowerCase())
  ))
};

export const selectCountriesInfo = (state) => {
  return {
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length,
  }
}
