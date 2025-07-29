import { createBrowserRouter } from "react-router-dom";
import { Auth } from "@/pages/auth/auth";
import { Home } from "@/pages/app/home/home";
import { Layout } from "@/pages/app/layout";
import { Suppliers } from "@/pages/app/suppliers";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "suppliers", element: <Suppliers /> },
    ],
  },
  { path: "auth", element: <Auth /> },
]);
