import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;

  height: 44px;
  width: 300px;

  border-radius: 4px;

  input {
    height: 100%;
    width: 100%;
    font-size: 16px;

    border: 0;

    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    background-color: #170027;

    color: #FBF6FF;

    &::placeholder {
      color: #FBF6FF;
    }
  }

  div {
    background-color: #9E6DC2;

    height: 100%;

    padding: 10px 23px;

    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;

    svg {
      font-size: 24px;
    }
  }
`;

