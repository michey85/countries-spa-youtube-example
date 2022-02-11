import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { selectControls } from '../features/controls/controls-slice';
import { loadCoutries, selectCountriesInfo, selectVisibleCountries } from '../features/countries/countries-slice';

export const useCountries = () => {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector(state => selectVisibleCountries(state, controls));
  const {status, error, qty} = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty)
      dispatch(loadCoutries());
  }, [qty, dispatch]);

  return [countries, {status, error, qty}];
}
