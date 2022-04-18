import React, { useState } from "react";
import {
  signIn,
  useSession,
  SignInResponse,
  getSession,
} from "next-auth/react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SigninForm from "../../src/forms/Signin/Signin";
import { AUTH_STATE } from "../../src/utils/enums";
import router from "next/router";
import { ROUTES } from "../../src/routes/Routes";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const loginHandler = async (e: React.SyntheticEvent, data: any) => {
    const response: SignInResponse = await signIn("credentials", {
      redirect: false,
      source: data.source,
      password: data.password,
    });
    if (response?.error) {
      alert(response.error);
    }
  };

  const StyledMainBox = styled(Box)(({ theme }) => ({
    width: "100%",
    height: `calc(100vh - 65px)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledSigninFormBox = styled(Box)(({ theme }) => ({
    width: "350px",
  }));

  if (status === AUTH_STATE.AUTHENTICATED) {
    router.push(ROUTES.DASHBOARD);
  }

  return (
    <StyledMainBox>
      <StyledSigninFormBox>
        {status === AUTH_STATE.UNAUTHENTICATED && (
          <SigninForm
            onSubmitForm={(data: any, e) => {
              loginHandler(e, data);
            }}
          />
        )}
      </StyledSigninFormBox>
    </StyledMainBox>
  );
};

export default LoginPage;
