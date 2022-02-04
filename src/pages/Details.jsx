import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';

import { selectDetails } from '../store/details/details-selector';
import { clearDetails, loadCountryByName } from '../store/details/details-actions';

export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {status, error, currentCountry} = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByName(name))

    return () => {
      dispatch(clearDetails());
    }
  }, [name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>Can't fetch data from the server =(</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
