import styled from 'styled-components';

export const Container = styled.div`

  max-width: 500px;
  margin: auto;
  text-align: center;

  position: absolute;
  top: calc(50% - 81px);
  left: calc(50% - 250px);

  > h1 {
    color: red;
    margin-bottom: 50px;
  }

  > p {
    color: blue;

    margin-bottom: 50px;
  }
`;