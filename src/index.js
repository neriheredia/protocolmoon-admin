import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeProvider } from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
