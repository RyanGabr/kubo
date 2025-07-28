import { createBrowserRouter } from "react-router-dom";
import { Auth } from "@/pages/auth/auth";
import { Home } from "@/pages/app/home/home";
import { Layout } from "@/pages/app/layout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }], 
  },
  { path: "auth", element: <Auth /> },
]);
