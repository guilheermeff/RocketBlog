import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.2);
  }

  h1, h2, h3, h4, p, a, span, strong {
    font-family: 'Roboto', sans-serif
  }
  
`;