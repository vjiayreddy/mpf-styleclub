import { NextRouter } from "next/router";
export const ROUTES = {
  DASHBOARD: "/",
  LOGIN: "/login",
  //PRODUCTS: "/products",
   PRODUCTS: "/occasions",
};

export const checkIsActiveMenuRoute = (
  router: NextRouter,
  path: string
): boolean => {
  if (router.query?.product === path) {
    return true;
  }
  return false;
};
