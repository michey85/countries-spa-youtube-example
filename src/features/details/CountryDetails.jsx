import { Info } from './Info';
import { useDetails } from '../../hooks/use-details';

const CountryDetails = ({name, navigate}) => {
  const {status, error, currentCountry} = useDetails(name);

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>Can't fetch data from the server =(</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  )
}

export {CountryDetails};
