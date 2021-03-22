import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "shared/App";
import { CssBaseline } from "@material-ui/core";

function Root() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  );
}

export default Root;
