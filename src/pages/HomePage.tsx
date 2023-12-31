import axios from 'axios'
import { useState,useEffect } from 'react'
import List from '../components/List'
import Card from '../components/Card'
import Controls from '../components/Controls'
import { useNavigate } from 'react-router-dom'
import { ALL_COUTNRIES } from '../config'
import { Country } from '../types/types'
interface HomePageProps{ 
    countries: Country[];
    setCountries: (data:Country[])=> void;
}


const HomePage = ({countries,setCountries}: HomePageProps) => {
    const navigate = useNavigate();
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const handleSearch = (search?:string, region?:string)=>{ 
        let data = [...countries];

        if(region){
            data = data.filter(c => c.region.includes(region))
        }

        if(search) { 
            data = data.filter(c=>c.name.common.toLowerCase().includes(search.toLowerCase()))
        }

        setFilteredCountries(data);
    }

    useEffect(()=>{
        if(!countries.length){
            axios.get(ALL_COUTNRIES).then(
                ({data})=> setCountries(data)
            )
        }

    //eslint-disable-next-line
    },[]);

    useEffect(()=>{
      handleSearch();
      
    //eslint-disable-next-line
    },[countries])
  return (
    <>
    <Controls onSearch={handleSearch}/>
          <List>
            {filteredCountries.map(c=>{
              const countryInfo = {
                img: c.flags.png,
                name: c.name.common,
                info:[
                  {
                    title: 'Population',
                    description: c.population.toLocaleString()
                  },
                  {
                    title: 'Region',
                    description: c.region
                  },
                  {
                    title: 'Capital',
                    description: c.capital
                  },
                ]
              };
              return( 
                <Card key={c.name.common} onClick={()=>navigate(`/country/${c.name.common}`)} {...countryInfo}/>
              )
            })}
          </List>
    </>
  )
}

export default HomePage