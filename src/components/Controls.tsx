import {useState, useEffect} from 'react'
import { Search } from './Search'
import { CustomSelect } from './CustomSelect';
import { Option } from '../types/types';
import styled from 'styled-components';
const options:Option[] = [
  {value: 'Africa', label: 'Africa'},
  {value: 'America', label: 'America'},
  {value: 'Asia', label: 'Asia'},
  {value: 'Europe', label: 'Europe'},
  {value: 'Oceania', label: 'Oceania'},
] ;
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

interface ControlsProps{ 
    onSearch: (search?:string, region?:string)=>void;
}


const Controls = ({onSearch}: ControlsProps) => {
  const [search, setSearch] = useState('');
  const [region,setRegion] = useState<Option>();

  useEffect(()=>{
    const regionValue = region?.value || '';
    onSearch(search,regionValue);
    //eslint-disable-next-line
  },[search,region])

  return (
    <Wrapper>
        <Search search={search} setSearch={setSearch}/>
        <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
        />
    </Wrapper>
  )
}

export default Controls