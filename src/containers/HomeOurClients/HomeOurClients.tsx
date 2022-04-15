import React from "react";
import { StyledSectionContainer, StyledImageSliderWrapper } from "./styled";
import SectionTypographyComponent from "../../components/uiElements/SectionTypography/SectionTypography";
import ImageSliderComponent from "./ImageSlider";
import Box from "@mui/material/Box";

const HomeOurClientsSection = () => {
  return (
    <StyledSectionContainer>
      <Box mb={5}>
        <SectionTypographyComponent
          primaryTitle="We love "
          titleComponent="h3"
          titleVarient="heading_large"
          highlightTitle="our clients"
        />
      </Box>
      <StyledImageSliderWrapper>
        <ImageSliderComponent />
      </StyledImageSliderWrapper>
    </StyledSectionContainer>
  );
};

export default HomeOurClientsSection;
