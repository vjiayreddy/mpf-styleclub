import React from "react";
import ContainerComponent from "../../uiElements/Container/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledMainBox = styled(Box)(({}) => ({}));

const StylistCard = () => {
  return (
    <ContainerComponent>
      <StyledMainBox>
        <Grid container>
          <Grid item md={6}></Grid>
          <Grid item md={6}>
            Content
          </Grid>
        </Grid>
      </StyledMainBox>
    </ContainerComponent>
  );
};

export default StylistCard;
