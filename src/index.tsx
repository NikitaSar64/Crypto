import React from "react";

import "@configs/configureMobX";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "@styles/index.scss";
import App from "./App/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
