import { createGlobalStyle } from 'styled-components';

export const GlobalStyles=createGlobalStyle`
  body  {
    background-color: ${({theme}) => theme.colors.label};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`