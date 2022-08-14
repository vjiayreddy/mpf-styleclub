import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormTextField from "../../components/UiLibrary/Form/FormTextField";
import { useForm } from "react-hook-form";
import LoadingButtonComponent from "../../components/uiElements/Buttons/LoadingButton";
import { useTheme } from "@mui/material";

const StyledFormBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  padding: 20,
  borderRadius: 10,
}));

const StyledFormTitle = styled(Typography)(({ theme }) => ({
  display: "block",
  fontWeight: 700,
  fontSize: 35,
}));
const StyledFormSubtitle = styled(Typography)(() => ({
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
    <>
      <Box pb={5}>
        <Typography align="center" gutterBottom variant="h6">
          Login
        </Typography>
      </Box>

      <StyledFormBox>
        <Box mt={3} mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormTextField
                name="source"
                clearable={true}
                label="Email/Mobile"
                id="mobile-email-input"
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <FormTextField
                name="password"
                fieldType="password"
                label="Password"
                id="password-input"
                control={control}
              />
            </Grid>
            <Grid item xs={12}>
              <LoadingButtonComponent
                fullWidth={true}
                loading={isFormSubmit}
                color="secondary"
                onClick={handleSubmit(handleLogin)}
                label="Sign In"
                id="btn-sign-in"
              />
            </Grid>
          </Grid>
        </Box>
      </StyledFormBox>
    </>
  );
};
export default SigninForm;
