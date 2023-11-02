import styled from 'styled-components';
import { FullCountry } from '../../types/types';
const ListGroup = styled.div`
    display: flex;

    gap: 2rem;

    flex-direction: column;

    @media (min-width:1024px) {
        flex-direction:row;
        gap: 4rem;

    }
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;   
`;

const ListItem = styled.li`
    line-height: 1.8;

    & > b{
        font-weight: var(--fw-bold)
    }
`;
const getValue = (obj: { 
    [key:string]: string
} | string, index = 0) => Object.values(obj)[index];


const InfoListGroup = (props:FullCountry) => {
  return (
    <ListGroup>
                <List>
                    <ListItem>
                        <b>Native Name: </b> {props.name.official}
                    </ListItem>
                    <ListItem>
                        <b>Population: </b> {props.population}
                    </ListItem>
                    <ListItem>
                        <b>Region: </b> {props.region}
                    </ListItem>
                    <ListItem>
                        <b>Sub Region: </b> {props.subregion}
                    </ListItem>
                    <ListItem>
                        <b>Capital: </b> {props.capital}
                    </ListItem>
                </List>
                <List>
                    <ListItem>
                        <b>Top Level Domain: </b> {props.tld.map(d => (<span key={d}>{d}</span>))}
                    </ListItem>
                    <ListItem>
                        <b>Currency: </b> {Object.values(props.currencies).map((c)=><span key={c.symbol}>{c.name}</span>)}
                    </ListItem>
                    <ListItem>
                    <b>Languages: </b> {getValue(props.languages)}
                    </ListItem>
                </List>
            </ListGroup>
  )
}

export default InfoListGroup