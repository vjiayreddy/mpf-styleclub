import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import RegistrationForm, {
  UserRegistrationPayload,
} from "../../src/forms/Registration";
import { useSession } from "next-auth/react";
import { AUTH_STATE } from "../../src/utils/enums";
import { useRouter } from "next/router";
import { useRegistration } from "../../src/apollo/hooks/useRegistration";
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
  const { gqlUserRegistration } = useRegistration();
  const router = useRouter();

  if (session && status === AUTH_STATE.AUTHENTICATED) {
    return router.back();
  }

  return (
    <StyledMainBox p={1}>
      <StyledFormBox>
        {status === AUTH_STATE.UNAUTHENTICATED && (
          <RegistrationForm
            onSubmit={(data: UserRegistrationPayload) => {
              gqlUserRegistration(data)
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          />
        )}
      </StyledFormBox>
    </StyledMainBox>
  );
};

export default RegistrationPage;
