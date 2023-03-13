import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
   
	box-sizing: border-box;
}
body {
	margin: 0;
	font-family: sans-serif;
    min-width: 375px;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
    background-color: white;
}
`;

export { GlobalStyle };
