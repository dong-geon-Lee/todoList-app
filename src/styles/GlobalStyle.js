import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    background-color: beige;
  }

  input, button {
    font-family: inherit;
    border: none; 
  }

  input {
    outline: none;
  }  

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyle;
