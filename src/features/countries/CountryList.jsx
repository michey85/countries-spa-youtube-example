import { useNavigate } from 'react-router-dom';

import { Card } from '../../components/Card';
import { List } from '../../components/List';
import { useCountries } from '../../hooks/use-countries';


const CountryList = () => {
  const [countries, {error, status}] = useCountries();

  const navigate = useNavigate();

  return (
    <>
      {error && <h2>Can't fetch data from server</h2>}
      {status === 'loading' && <h2>Loading...</h2>}

      {
        status === 'received' && (
          <List>
            {countries.map((c) => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  },
                ],
              };

              return (
                <Card
                  key={c.name}
                  onClick={() => navigate(`/country/${c.name}`)}
                  {...countryInfo}
                />
              );
            })}
          </List>
        )
      }
    </>
  )
}

export {CountryList};
