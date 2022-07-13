import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme['black']};
    color: ${({theme}) => theme['white']};
    font-family: Poppins, sans-serif;
  }

  button {
    outline: 0;
    &:focus {
      box-shadow: 0 0 0 3px ${({theme}) => theme['yellow-600']};
    }

    cursor: pointer;
    border: 0;
    background-color: ${({theme}) => theme['yellow-500']};
  }
`