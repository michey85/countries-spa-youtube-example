import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';

import { clearDetails, loadCountryByName, selectDetails } from '../features/details/details-slice';

export const useDetails = (name) => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name))

    return () => {
      dispatch(clearDetails());
    }
  }, [name, dispatch]);

  return details;
}
