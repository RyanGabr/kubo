import { RouterProvider } from "react-router-dom";
import { routes } from "./app/routes";
import { ThemeProvider } from "./components/theme-provider";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./lib/supabase";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/query-client";

export function App() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={routes} />
        </ThemeProvider>
      </QueryClientProvider>
    </SessionContextProvider>
  );
}
