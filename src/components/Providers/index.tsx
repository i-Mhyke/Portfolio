import * as React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "../Navbar";
import theme from "../Theme";

const Providers = ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Navbar />
        {children}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Providers;
