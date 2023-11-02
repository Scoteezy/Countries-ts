import {useEffect,useState} from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { FullCountry,CountryName } from '../../types/types'
import { filterByCode } from '../../config';

const Meta = styled.div`
    margin-top: 3rem;
    display:flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;

    & > b{
        font-weight: var(--fw-bold)
    }
    @media (min-width: 767px) {
        flex-direction: row;
        align-items: center;
    }
`;

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height:1.5;
    cursor: pointer;
`;



interface InfoMetaProps extends FullCountry {
    push: (link:string)=>void

}
interface C {
    name: CountryName
}

const InfoMeta = (props: InfoMetaProps) => {
    const [neighbors, setNeighbors] = useState([]);
    useEffect(()=>{
            if(props.borders?.length){
                axios.get(filterByCode(props.borders)).then(
                    ({data})=> setNeighbors(data.map((c:C)=>c.name.common))
                )
            }
    },[props.borders])

  return (
    <Meta>
                <b>Border Countries</b>
                {!props.borders.length ? (
                    <span>There is no borders countrues</span>
                ): 
                (
                    <TagGroup>
                        {neighbors.map(b=> (<Tag onClick={()=>{props.push(`/country/${b}`)}} key={b}>{b}</Tag>))}
                    </TagGroup> 
                )
                    
                    }
    </Meta>
  )
}

export default InfoMeta