import { createBrowserRouter } from "react-router-dom";
import { Auth } from "@/pages/auth/auth";
import { Home } from "@/pages/app/home/home";
import { Layout } from "@/pages/app/layout";
import { Suppliers } from "@/pages/app/suppliers";
import { Categories } from "@/pages/app/categories";
import { Feedback } from "@/pages/app/feedback";
import { Products } from "@/pages/app/products";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "suppliers", element: <Suppliers /> },
      { path: "categories", element: <Categories /> },
      { path: "feedback", element: <Feedback /> },
      { path: "products", element: <Products /> },
    ],
  },
  { path: "auth", element: <Auth /> },
]);
