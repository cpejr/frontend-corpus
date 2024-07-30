import React from "react";
import ReactDOM from "react-dom/client";
import AppProvider from "./AppProvider.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LanguageProvider } from "./stores/globalLanguage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: import.meta.env.VITE_STALE_TIME || 300000,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider></PrimeReactProvider>
      <GlobalStyles />
      <LanguageProvider>
        <AppProvider />
      </LanguageProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
