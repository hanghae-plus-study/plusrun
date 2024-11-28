import { createBrowserRouter } from "react-router-dom";

import { SignupPage, LoginPage, HomePage, CoursePage, CommunityPage, RootPage } from "./lazyPages";
import ROUTE_PATH from "./routPath";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/course", element: <CoursePage /> },
      { path: "/community", element: <CommunityPage /> },
    ],
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: (
      <Suspense>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: ROUTE_PATH.SIGNUP,
    element: (
      <Suspense>
        <SignupPage />
      </Suspense>
    ),
  },
]);

export default router;
