// styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background-color: #faf3e0;
    color: #333;
  }

  html {
  scroll-behavior: smooth;
}
`;
