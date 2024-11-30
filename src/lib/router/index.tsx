import { createBrowserRouter } from "react-router-dom";

import {
  SignupPage,
  LoginPage,
  HomePage,
  CoursePage,
  CommunityPage,
  RootPage,
  CommunityPostingPage,
} from "./lazyPages";
import ROUTE_PATH from "./routPath";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: (
      <Suspense>
        <RootPage />
      </Suspense>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/course", element: <CoursePage /> },
      { path: ROUTE_PATH.COMMUNITY, element: <CommunityPage /> },
      { path: ROUTE_PATH.COMMUNITY_POSTING, element: <CommunityPostingPage /> },
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
