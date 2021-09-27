import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/globalStyles";
import themes from "../themes";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  return (
  <ThemeProvider theme={themes.dark}>
    <GlobalStyles/>
      <Header/>
      <Main/>
   </ThemeProvider>   
  );
}

export default App;