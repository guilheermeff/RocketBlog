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

  main {
    display: grid;
    grid-template-columns: 1fr 1fr;

    h1 {
      font-family: 'Roboto', sans-serif;
      font-size: 36px;

      color: #9E6DC2;
    }

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 18px;

      color: #FBF6FF;
    }

    img {
      width: 100%;
      max-width: 570px;
    }
  }




`;

export const Main = styled.div`

`;