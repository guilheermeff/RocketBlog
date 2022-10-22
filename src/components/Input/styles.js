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
    font-weight: lighter;

    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;

    background-color: #170027;

    color: #FBF6FF;

    padding: 14px 25px;

    &::placeholder {
      color: #FBF6FF;
    }
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
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

