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
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr;

    margin-top: 64px;

    h1 {
      font-size: 36px;
      line-height: 54px;

      color: #9E6DC2;
    }

    p {
      font-size: 18px;

      color: #FBF6FF;
      
      margin-top: 16px;
      margin-bottom: 24px;
    }

    a {
      font-size: 18px;
      color: #9E6DC2;

      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: #4FFF4B;
        font-size: 24px;
      }
    }

    img::before {
      content: '';
      width: 100%;
      height: 100%;

      position: relative;
      z-index: 1;

      background-color: #EF23F3;
    }

    img {
      width: 100%;
      max-width: 570px;
      border-radius: 10px;

      max-height: 346px;
    }
  }
`;