import { createBrowserRouter } from "react-router-dom";

import {
  SignupPage,
  LoginPage,
  HomePage,
  CoursePage,
  CommunityPage,
  RootPage,
  CourseDetailPage,
} from "./lazyPages";
import ROUTE_PATH from "./routPath";

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/course", element: <CoursePage /> },
      { path: "/community", element: <CommunityPage /> },
      { path: "/courses/:id", element: <CourseDetailPage /> },
    ],
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
