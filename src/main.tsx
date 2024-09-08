import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./store.ts";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const queryClient = new QueryClient();
const theme = createTheme();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
