import { Auth } from "@/pages/auth/auth";
import { Home } from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "auth", element: <Auth /> },
]);
