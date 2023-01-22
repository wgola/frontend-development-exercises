import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import router from "./routes.js";
import theme from "./theme.js";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MUIThemeProvider theme={theme}>
    <EmotionThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <RouterProvider router={router} />
      </Provider>
    </EmotionThemeProvider>
  </MUIThemeProvider>
);
