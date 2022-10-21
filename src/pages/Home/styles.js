import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 588px 1fr;
  grid-template-areas: 
    "A"
    "B"
  ;
`;

export const Top = styled.div`

  padding-top: 64px;
  padding-inline: 135px;

  background-color: #290742;

`;

export const Content = styled.div`
  width: 100%;
  max-width: 1170px;

  img {
    width: 100%;
    max-width: 346px;
  }


`;

export const Main = styled.div`

`;