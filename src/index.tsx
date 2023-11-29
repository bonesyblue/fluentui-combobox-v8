import { ThemeProvider, initializeIcons } from "@fluentui/react";
import React from "react";
import ReactDOM from "react-dom";
import ReactClientDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// Initialize icons in case this example uses them
initializeIcons();

const root = ReactClientDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <div>
        React version: <b>{React.version}</b>
      </div>
      <div>
        ReactDOM version: <b>{ReactDOM.version}</b>
      </div>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
