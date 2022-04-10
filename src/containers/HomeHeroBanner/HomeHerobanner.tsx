import React from "react";
import {
  StyledHeroContainer,
  StyledHeroImage,
  StyledHeroContent,
  SxHeroTitleStyles
} from "./styled";

import SectionTypographyComponent from "../../components/uiElements/SectionTypography/SectionTypography";
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
        />
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
