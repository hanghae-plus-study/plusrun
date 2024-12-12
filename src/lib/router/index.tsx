import { createBrowserRouter } from "react-router-dom";

import {
  SignupPage,
  LoginPage,
  HomePage,
  CoursePage,
  CommunityPage,
  RootPage,
  CommunityPostingPage,
  CourseDetailPage,
} from "./lazyPages";
import ROUTE_PATH from "./routPath";
import { Suspense } from "react";
import CommunityPostDetailPage from "src/pages/community-post";

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
      { path: "/courses/:id", element: <CourseDetailPage /> },
      { path: ROUTE_PATH.COMMUNITY, element: <CommunityPage /> },
      { path: "/community/:id", element: <CommunityPostDetailPage /> },
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
