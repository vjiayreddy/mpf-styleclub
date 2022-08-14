import React from "react";
import { useSession } from "next-auth/react";
import { AUTH_STATE } from "../../../utils/enums";
import { NextRouter, useRouter } from "next/router";
import { ROUTES } from "../../../routes/Routes";

const AuthProtectedRoute = (Component: React.FunctionComponent) => {
  return (props) => {
    const { data: session, status } = useSession();
    const router: NextRouter = useRouter();
    if (!session && status === AUTH_STATE.LOADING) return <div></div>;
    if (!session && status === AUTH_STATE.UNAUTHENTICATED) {
      router.push(ROUTES.LOGIN);
    }
    return <Component session={session} {...props} />;
  };
};

export default AuthProtectedRoute;
