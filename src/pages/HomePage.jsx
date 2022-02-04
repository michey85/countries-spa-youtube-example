import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

import { selectCountriesInfo, selectVisibleCountries } from '../store/countries/countries-selectors';
import { loadCoutries } from '../store/countries/cuntries-actions';
import { selectControls } from '../store/controls/controls-selectors';

export const HomePage = () => {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector(state => selectVisibleCountries(state, controls));
  const {status, error, qty} = useSelector(selectCountriesInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (!qty)
      dispatch(loadCoutries());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qty]);

  return (
    <>
      <Controls />

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
  );
};
