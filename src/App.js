import React from "react";
import { ThemeProvider } from "emotion-theming";
import { defaulttheme } from "./themes/defaultthemes";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={defaulttheme}>
      <GlobalStyles />
      <div>HI</div>
    </ThemeProvider>
  );
}

export default App;
