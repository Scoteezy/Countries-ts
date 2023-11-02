import styled from "styled-components";
import { FullCountry } from "../../types/types";
import InfoListGroup from "./InfoListGroup";
import InfoMeta from "./InfoMeta";
const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: minmax(100px,400px) 1fr;
        align-items: center;
        gap: 5rem;

    }
    @media (min-width: 1024px){
        grid-template-columns: minmax(400px,600px) 1fr;


    }
`;

const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw--normal);

`;
interface InfoProps extends FullCountry{
push: (link:string)=>void
}
const Info = (props:InfoProps) => {
    const {
        name,
        flags,
    }= props;
  return (
    <Wrapper>
        <InfoImage src={flags.png} alt={name.common}/>
        <div>
            <InfoTitle>{name.common}</InfoTitle>

            <InfoListGroup {...props}/>
            <InfoMeta {...props}/>
        </div>
    </Wrapper>
  )
}

export default Info