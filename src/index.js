import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AllProviders from "./context/AllProviders";

ReactDOM.render(
  <React.StrictMode>
    <AllProviders>
      <App />
    </AllProviders>
  </React.StrictMode>,
  document.getElementById("root")
);
