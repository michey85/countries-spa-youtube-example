export const selectVisibleCountries = (state, {search = '', region = ''} = {}) => {
  return state.countries.list.filter(country => (
    country.region.includes(region) && country.name.toLowerCase().includes(search.toLowerCase())
  ))
}

export const selectCountriesInfo = (state) => {
  return {
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length,
  }
}
