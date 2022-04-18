import React from "react";
import { useSession } from "next-auth/react";
import { AUTH_STATE } from "../../../utils/enums";
import { NextRouter, useRouter } from "next/router";

const AuthProtectedRoute = (Component: React.FunctionComponent) => {
  return (props) => {
    const { data: session, status } = useSession();
    const router: NextRouter = useRouter();
    if (!session && status === AUTH_STATE.UNAUTHENTICATED) {
      router.push("/login");
    }
    return <Component session={session} {...props} />;
  };
};

export default AuthProtectedRoute;
