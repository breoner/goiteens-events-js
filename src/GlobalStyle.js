import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px;
    font-family: 'Segoe UI', sans-serif;
    background-color: #f3f6f9;
  }
  * {
    box-sizing: border-box;
  }
`;