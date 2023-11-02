import axios from 'axios';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { searchByCountry } from '../config';
import { Button } from '../components/Button';
import Info from '../components/Info/Info';
import { FullCountry } from '../types/types';
const Details = () => {
  const navigate = useNavigate();
  const {name} = useParams();
  const [country,setCountry] = useState<FullCountry>();

  useEffect(()=>{
    if(name){
        axios.get(searchByCountry(name)).then(
            ({data})=>setCountry(data[0])
            );
    }
  },[name])
  return (
    <>
    <Button onClick={()=>navigate(-1)}>
      <IoArrowBack/> back
    </Button>
    {country && ( <Info push={navigate} {...country}/>)}
    </>
  )
}

export default Details