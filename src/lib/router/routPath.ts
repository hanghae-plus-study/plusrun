const ROUTE_PATH = {
  ROOT: "/",
  LOGIN: "/login",
  SIGNUP: "/signup",
  COURSE: "/course",
  COMMUNITY: "/community",
  COMMUNITY_DETAIL: "/community/:id",
  COMMUNITY_POSTING: "/community/posting",
} as const;

export default ROUTE_PATH;
