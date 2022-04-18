import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormTextField from "../../components/uiElements/FormElements/FormTextField/FormTextField";
import { useForm } from "react-hook-form";
import LoadingButtonComponent from "../../components/uiElements/Buttons/LoadingButton";
import { useTheme } from "@mui/material";

const StyledForm = styled(Box)(({ theme }) => ({
  minWidth: 350,
}));

const StyledFormTitle = styled(Typography)(({ theme }) => ({
  display: "block",
  ...theme.typography.secondaryFont,
  fontWeight: 700,
  fontSize: 35,
}));
const StyledFormSubtitle = styled(Typography)(({ theme }) => ({
  display: "block",
}));

interface SignInFormProps {
  onSubmitForm: (data: any, e: React.SyntheticEvent) => void;
  isFormSubmit?: boolean;
}

const SigninForm: React.FC<SignInFormProps> = ({
  onSubmitForm,
  isFormSubmit,
}) => {
  const { control, handleSubmit } = useForm();
  const theme = useTheme();
  const handleLogin = (data: any, e: React.SyntheticEvent) => {
    onSubmitForm(data, e);
  };

  return (
    <StyledForm>
      <StyledFormTitle variant="heading_small">Welcome back</StyledFormTitle>
      <StyledFormSubtitle variant="content_small">
        Welcome back! Please enter your details
      </StyledFormSubtitle>

      <Box mt={3} mb={3}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormTextField
              name="source"
              label="Email/Mobile"
              id="mobile-eamil-input"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <FormTextField
              name="password"
              label="Password"
              id="password-input"
              control={control}
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButtonComponent
              fullWidth={true}
              loading={isFormSubmit}
              disabled={isFormSubmit}
              disablebg={theme.palette.secondary.main}
              color="secondary"
              onClick={handleSubmit(handleLogin)}
              label="Sign In"
              id="btn-sign-in"
            />
          </Grid>
        </Grid>
      </Box>
    </StyledForm>
  );
};
export default SigninForm;
