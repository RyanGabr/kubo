import { Sign } from "@/pages/auth/sign-in";
import { Home } from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "sign-in", element: <Sign /> },
]);
