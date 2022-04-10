import React from "react";
import { StyledHeroContainer, StyledHeroImage } from "./styled";
import Image from "next/image";
const HomeHerobannerContainer = () => {
  return (
    <StyledHeroContainer>
      <h1>Hello</h1>
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
