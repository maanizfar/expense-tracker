import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { TransactionProvider } from "./state/TransactionProvider";
import { ThemeProvider } from "./state/ThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <TransactionProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TransactionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
