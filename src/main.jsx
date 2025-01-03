import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./service/api.js";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    primary: {
      main: "#fff"
    },
    my: {
      main:"#fff",
      light: "#fff",
      dark: "#303030",
      contrastText: "#fff"
    }
  }
});
createRoot(document.getElementById("root")).render(
  <ApiProvider api={api}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApiProvider>
);
