import { createBrowserRouter } from "react-router-dom";
import { PublicLayout } from "./route-layout/public-route";
import { PrivateLayout } from "./route-layout/private-route";
import Home from "../container/home";
import Dashboard from "../container/dashboard";
import Login from "../container/layout/login";
import Products from "../container/products";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  {
    path: "/app",
    element: <PrivateLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      }, {
        path: "products",
        element: <Products />
      }
    ]
  }
]);

export default router;