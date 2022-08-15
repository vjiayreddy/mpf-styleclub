import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormTextField from "../../components/UiLibrary/Form/FormTextField";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import FormMobileInput from "../../components/UiLibrary/Form/FormMobileInput";
import _ from "lodash";
import { isPhoneNumberValid, validateEmail } from "../../utils/validations";
import LoadingButtonComponent from "../../components/uiElements/Buttons/LoadingButton";

export type UserRegistrationPayload = {
  email: string;
  phone: string;
  countryCode: string;
  password: string;
  firstName: string;
  lastName: string;
  fullName: string;
  redirect: string;
};
interface RegistrationFormProps {
  onSubmit: (data: UserRegistrationPayload) => void;
}

const StyledFormBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  padding: 20,
  borderRadius: 10,
}));

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data: UserRegistrationPayload) => {
    onSubmit(data);
  };

  return (
    <>
      <Box pb={5}>
        <Typography align="center" gutterBottom variant="h6">
          Create an Account{" "}
        </Typography>
      </Box>
      <StyledFormBox>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid item md={6} lg={6} xs={6} sm={6}>
            <FormTextField
              control={control}
              rules={{ required: "This is required." }}
              id="input-first-name"
              label="First Name"
              name="firstName"
              clearable={true}
            />
          </Grid>
          <Grid item md={6} lg={6} xs={6} sm={6}>
            <FormTextField
              rules={{ required: "This is required." }}
              control={control}
              id="input-last-name"
              label="Last Name"
              name="lastName"
              fieldType="text"
            />
          </Grid>
          <Grid item md={12} lg={12} xs={12} sm={12}>
            <FormMobileInput
              name="phone"
              label="Mobile Number"
              control={control}
              error={!_.isEmpty(errors) ? errors["phone"] : null}
              rules={{
                validate: isPhoneNumberValid,
              }}
            />
          </Grid>
          <Grid item md={12} lg={12} xs={12} sm={12}>
            <FormTextField
              rules={{
                validate: validateEmail,
              }}
              control={control}
              id="input-email"
              label="Email Address"
              name="email"
              fieldType="text"
            />
          </Grid>
          <Grid item md={12} lg={12} xs={12} sm={12}>
            <FormTextField
              rules={{ required: "This is required." }}
              control={control}
              id="input-password"
              label="Password"
              name="password"
              fieldType="password"
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButtonComponent
              id="btn-register"
              label="REGISTER"
              fullWidth={true}
              loading={true}
              color="secondary"
              onClick={handleSubmit(onFormSubmit)}
            />
          </Grid>
        </Grid>
      </StyledFormBox>
    </>
  );
};

export default RegistrationForm;
