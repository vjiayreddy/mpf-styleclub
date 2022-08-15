import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import OtpInput from "react-otp-input";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { GLOBAL_FONTS } from "../../config/theme/enums/enums";
import LinkIconButton from "../../components/UiLibrary/LinkIconButton";
import LoadingButtonComponent from "../../components/uiElements/Buttons/LoadingButton";

interface OtpFormProps {
  source: string;
}

const StyledMainBox = styled(Box)(({ theme }) => ({
  padding: 50,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyItems: "center",
  border: `1px solid ${theme.palette.grey[200]}`,
}));

const StyledOtpInput: React.CSSProperties = {
  width: 40,
  height: 45,
  margin: 5,
  fontSize: 16,
  fontFamily: GLOBAL_FONTS.SECONDARY_FONT,
  fontWeight: 600,
  border: `1px solid gainsboro`,
  borderRadius: 5,
};

const StyledFormTitle = styled(Typography)(() => ({
  marginBottom: 5,
}));

const StyledFormInfo = styled(Typography)(({ theme }) => ({
  marginBottom: 1,
  lineHeight: 1,
  color: theme.palette.grey[500],
  fontSize: 16,
}));

const StyledSpanLabel = styled("span")(({ theme }) => ({
  color: theme.palette.common.black,
}));

const OtpForm: React.FC<OtpFormProps> = ({ source }) => {
  const [OTP, setOTP] = useState("");
  const handleChange = (otp) => setOTP(otp);
  const handleSubmit = () => {
    console.log(OTP);
  };

  return (
    <StyledMainBox>
      <Box>
        <StyledFormTitle align="center" variant="subtitle1">
          OTP Verification
        </StyledFormTitle>
        <StyledFormInfo align="center" variant="body1">
          Enter the OTP sent to
          <b>
            <StyledSpanLabel> {source}</StyledSpanLabel>
          </b>
        </StyledFormInfo>
      </Box>
      <Box mb={2} mt={5}>
        <OtpInput
          value={OTP}
          onChange={handleChange}
          numInputs={6}
          hasErrored={true}
          isInputNum={true}
          inputStyle={StyledOtpInput}
          separator={<span style={{ fontWeight: 800 }}> - </span>}
        />
      </Box>
      <Box>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <StyledFormInfo>Don't received the OTP? </StyledFormInfo>
          </Grid>
          <Grid item>
            <LinkIconButton
              shoIcon={false}
              label="RESEND OTP"
              btnColor="primary"
              onClick={() => {}}
            />
          </Grid>
        </Grid>
      </Box>
      <Box mt={3}>
        <LoadingButtonComponent
          color="secondary"
          id="btn-verify-otp"
          onClick={handleSubmit}
          label="VERIFY & PROCEED"
          loading={true}
        />
      </Box>
    </StyledMainBox>
  );
};

export default OtpForm;
