import React from "react";
import {
  StyledHeroContainer,
  StyledHeroImage,
  StyledHeroContent,
  SxHeroTitleStyles,
  SxHeroContentStyles,
} from "./styled";

import SectionTypographyComponent from "../../components/uiElements/SectionTypography/SectionTypography";
import ButtonComponent from "../../components/uiElements/Buttons/Button";

import Box from "@mui/material/Box";
const HomeHerobannerContainer = () => {
  return (
    <StyledHeroContainer>
      <StyledHeroContent>
        <SectionTypographyComponent
          primaryTitle="Your "
          titleSx={SxHeroTitleStyles}
          titleComponent="h1"
          highlightTitle="best looking-self"
          secondaryTitle=" is a few clicks away"
          contentSx={SxHeroContentStyles}
          contentElementType="p"
          contentComponent={
            <>
              Our AI powered tool & <b>personal stylists</b> have helped men
              create their best looking selves. Join the <b>handsomeness </b>
              revolution.
            </>
          }
        />
        <Box mt={5}>
          <ButtonComponent id="btn-access-now" onClick={() => {}} title="GET ACCESS NOW" />
        </Box>
      </StyledHeroContent>
      <StyledHeroImage
        alt="hero-banner-image"
        src="/assets/home_page_hero_image.png"
        layout="fill"
        quality={100}
        objectFit="cover"
        placeholder="blur"
        blurDataURL="/assets/home_page_hero_image.png"
      />
    </StyledHeroContainer>
  );
};

export default HomeHerobannerContainer;
