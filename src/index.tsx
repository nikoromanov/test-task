import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

import("./msw/browser")
  .then(({ worker }) => {
    worker.start();
  })
  .then(() => {
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
