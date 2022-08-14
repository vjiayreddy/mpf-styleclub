import { NextRouter } from "next/router";
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  PRODUCTS: "/products",
  REGISTER: "/register",
  //PRODUCTS: "/occasions",
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
