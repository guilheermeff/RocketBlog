import styled from 'styled-components';

export const Container = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`

  ul {
    display: flex;
    gap: 32px;

    list-style: none;

    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;

    color: #FFFFFF;
  }
`;