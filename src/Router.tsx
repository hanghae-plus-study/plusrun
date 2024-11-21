import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import "./index.css";
import { Home } from "./pages/Home/Home";

const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

const Router = () => {
  return <RouterProvider router={createBrowserRouter(router)} />;
};

export default Router;
