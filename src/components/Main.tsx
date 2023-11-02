import styled from "styled-components";
import { Container } from './Container';
import React from "react";

const Wrapper = styled.main`
    padding: 2rem 0;
    
    @media(min-width: 767px) {
        padding: 4rem;
    }

`;
interface MainProps{ 
    children : React.ReactNode;
}
const Main = ({children}: MainProps) => {
  return (
    <Wrapper>
        <Container>
            {children}
        </Container>
    </Wrapper>
  )
}

export default Main