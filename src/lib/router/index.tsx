import { createBrowserRouter } from "react-router-dom";

import { SignupPage, LoginPage } from "./lazyPages";
import ROUTE_PATH from "./routPath";

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <div />,
    children: [],
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTE_PATH.SIGNUP,
    element: <SignupPage />,
  },
]);

export default router;
