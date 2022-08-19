import React, { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import RegistrationForm, {
  UserRegistrationPayload,
} from "../../src/forms/Registration";
import { useSession } from "next-auth/react";
import { AUTH_STATE } from "../../src/utils/enums";
import { useRouter } from "next/router";
import { useRegistration } from "../../src/apollo/hooks/useRegistration";
import DialogModel from "../../src/components/UiLibrary/DialogModel/DialogModel";
import OtpForm from "../../src/forms/OTP";
const StyledMainBox = styled(Box)(() => ({
  width: "100%",
  height: `calc(100vh - 65px)`,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingTop: 150,
}));

const StyledFormBox = styled(Box)(() => ({
  width: 400,
}));

const RegistrationPage = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState<boolean>(false);
  const [source, setSource] = useState<string>("");
  const { gqlUserRegistration, loadingRU } = useRegistration();
  const router = useRouter();

  if (session && status === AUTH_STATE.AUTHENTICATED) {
    return router.back();
  }

  const handleOtp = (otp: string) => {
    console.log(otp);
  };

  return (
    <StyledMainBox p={1}>
      <StyledFormBox>
        {status === AUTH_STATE.UNAUTHENTICATED && (
          <RegistrationForm
            loading={loadingRU}
            onSubmit={(data: UserRegistrationPayload) => {
              gqlUserRegistration(data)
                .then((response) => {
                  console.log(response);
                  setSource(response["registerUser"]["phone"]);
                  setOpen(true);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          />
        )}
      </StyledFormBox>
      <DialogModel
        component={
          <OtpForm source={source} loading={false} onSubmit={handleOtp} />
        }
        open={open}
        onClose={() => setOpen(false)}
      />
    </StyledMainBox>
  );
};

export default RegistrationPage;
