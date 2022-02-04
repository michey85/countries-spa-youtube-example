import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

import { selectControls } from '../store/controls/controls-selectors';
import {setRegion, setSearch} from '../store/controls/controls-actions';

const optionsMap = {
  'Africa': { value: 'Africa', label: 'Africa' },
  'America': { value: 'America', label: 'America' },
  'Asia': { value: 'Asia', label: 'Asia' },
  'Europe': { value: 'Europe', label: 'Europe' },
  'Oceania': { value: 'Oceania', label: 'Oceania' },
}
const options = Object.values(optionsMap);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Controls = () => {
  const dispatch = useDispatch();
  const {search, region} = useSelector(selectControls);

  const handleSearch = (str) => {
    dispatch(setSearch(str));
  }
  const handleRegion = (reg) => {
    dispatch(setRegion(reg?.value || ''));
  }

  return (
    <Wrapper>
      <Search search={search} setSearch={handleSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={optionsMap[region]}
        onChange={handleRegion}
      />
    </Wrapper>
  );
};
