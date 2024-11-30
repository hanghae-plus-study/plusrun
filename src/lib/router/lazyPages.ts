import { lazy } from "react";

export const LoginPage = lazy(() => import("../../pages/login"));
export const SignupPage = lazy(() => import("../../pages/signup"));
export const HomePage = lazy(() => import("../../pages/home"));
export const CoursePage = lazy(() => import("../../pages/course"));
export const CommunityPage = lazy(() => import("../../pages/community"));
export const RootPage = lazy(() => import("../../layout/Root"));
export const CourseDetailPage = lazy(
  () => import("../../pages/course/Components/CourseDetail")
);
