import { useNavigate, useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { selectDetails } from '../store/details/details-selector';
import { clearDetails, loadCountryByName } from '../store/details/details-actions';


export const Details = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const {currentCountry, error, status} = useSelector(selectDetails);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadCountryByName(name));

    return () => {
      dispatch(clearDetails());
    }
  }, [name, dispatch]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
