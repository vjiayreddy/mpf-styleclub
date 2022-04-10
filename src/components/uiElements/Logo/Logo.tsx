import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const LOGO = "/assets/logo_white.jpg";
const StyledImageBox = styled(Box)(() => ({
  height: 55,
  position: "relative",
}));

const LogoComponent = () => {
  return (
    <StyledImageBox>
      {/* <img width={150} alt="app-logo" src={LOGO} /> */}
    </StyledImageBox>
  );
};

export default LogoComponent;
