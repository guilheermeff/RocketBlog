import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  align-items: center;
  gap: 8px;

  padding-left: 10px;

  width: 100%;
  height: 45px;
  margin: 0 auto;

  background-color: #e5e5e5;
  border-radius: 7px;

  svg {
    text-align: center;
  }

  input {
    height: 100%;
    width: 100%;
    font-size: 16px;

    border: 0;

    background-color: transparent;

    color: #717171;

    &::placeholder {
      color: #717171;
    }
  }
`;

