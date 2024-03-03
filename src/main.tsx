import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { ThemeProvider } from "./components/mode/theme-provider.js";
import { App } from "./app";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);