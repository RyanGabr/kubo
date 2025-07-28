import { RouterProvider } from "react-router-dom";
import { routes } from "./app/routes";
import { ThemeProvider } from "./components/theme-provider";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "./lib/supabase";

export function App() {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={routes} />
      </ThemeProvider>
    </SessionContextProvider>
  );
}
