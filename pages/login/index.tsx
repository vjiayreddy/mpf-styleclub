import React, { useState } from "react";
import { signIn, useSession, SignInResponse } from "next-auth/react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SigningForm from "../../src/forms/Signin/Signin";
import { AUTH_STATE, ERRORS } from "../../src/utils/enums";
import router from "next/router";
import OtpForm from "../../src/forms/OTP";
import DialogModel from "../../src/components/UiLibrary/DialogModel/DialogModel";

type loginPayload = {
  source: string;
};

const LoginPage = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState<boolean>(false);
  const [_formValues, setFormValues] = useState<loginPayload>({
    source: "",
  });

  // Login Handler
  const loginHandler = async (_: React.SyntheticEvent, data: any) => {
    const response: SignInResponse = await signIn("credentials", {
      redirect: false,
      source: data.source,
      password: data.password,
    });
    if (response?.error) {
      if (response.error === ERRORS.MOBILE_NOT_VERIFIED) {
        return setOpen(true);
      }
      alert(response?.error);
    }
  };
  const StyledMainBox = styled(Box)(() => ({
    width: "100%",
    height: `calc(100vh - 65px)`,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 100,
  }));

  const StyledSigningFormBox = styled(Box)(() => ({
    width: "350px",
  }));

  if (status === AUTH_STATE.LOADING) {
    return <div>Loading...</div>;
  }

  if (session && status === AUTH_STATE.AUTHENTICATED) {
    return router.back();
  }

  return (
    <StyledMainBox>
      <StyledSigningFormBox>
        {status === AUTH_STATE.UNAUTHENTICATED && (
          <SigningForm
            onSubmitForm={(data: any, e) => {
              setFormValues({ source: data.source });
              loginHandler(e, data);
            }}
          />
        )}
      </StyledSigningFormBox>
      <DialogModel
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        component={
          <OtpForm
            onSubmit={(otp: string) => console.log(otp)}
            loading={false}
            source={_formValues.source}
          />
        }
      />
    </StyledMainBox>
  );
};

export default LoginPage;
