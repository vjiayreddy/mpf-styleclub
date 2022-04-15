import React from "react";
import Grid from "@mui/material/Grid";
import SectionTypographyComponent from "../../components/uiElements/SectionTypography/SectionTypography";
import {
  StyledSectionContainer,
  SxSectionContentStyles,
  SxSectionTitleStyles,
} from "./styled";
import Box from "@mui/material/Box";
import ContainerComponent from "../../components/uiElements/Container/Container";
import LeftImageContentRightComponent from "./LeftImageContentRight";
import RightImageLeftContentComponent from "./RightImageLeftContent";
import { SxProps } from "@mui/system";

const boxSxStyles: SxProps = {
  marginBottom: {
    md: "120px",
    xs: "40px",
    sm: "40px",
    lg: "120px",
    xl: "120px",
  },
};

const HomePersonalStylistContainer = () => {
  return (
    <Box>
      <StyledSectionContainer>
        <SectionTypographyComponent
          titleVarient="heading_large"
          primaryTitle="Your personal stylist - "
          titleComponent="h2"
          highlightTitle="in your pocket"
          titleSx={SxSectionTitleStyles}
          contentSx={SxSectionContentStyles}
          contentElementType="p"
          contentComponent={
            <>
              When you join <b> MPF Style Club </b>, you get access to a
              personal stylist who can answer all your questions and our
              AI-powered tool to help you make the right fashion moves. We'll
              recommend looks, help you groom yourself and give you exclusive
              members-only benefits. Join us now you.
            </>
          }
        />
      </StyledSectionContainer>
      <ContainerComponent>
        <Box sx={boxSxStyles}>
          <LeftImageContentRightComponent
            data={{
              primaryTitle: "Be ",
              highlightTitle: " perfectly styled",
              secondaryTitle: " all the times",
              image: "/assets/home_perfect_styled.webp",
              alt: "style-club-perfecty-style",
              number: 1,
              primaryContentText: `Attending a wedding or traveling offsite? Discover the right looks for every occasion. Learn the right sizes, shapes, colours and get styling tips that gratify your body, personality and lifestyle.`,
            }}
          />
        </Box>
        <Box sx={boxSxStyles}>
          <RightImageLeftContentComponent
            data={{
              primaryTitle: "Get ",
              highlightTitle: " groomed",
              secondaryTitle: " to complete your look",
              image: "/assets/home_groom_image.webp",
              alt: "style-club-groomeing",
              number: 2,
              primaryContentText: `Attending a wedding or traveling offsite? Discover the right looks for every occasion. Learn the right sizes, shapes, colours and get styling tips that gratify your body, personality and lifestyle.`,
            }}
          />
        </Box>
        <Box sx={boxSxStyles}>
          <LeftImageContentRightComponent
            data={{
              primaryTitle: "Never be scared to ",
              highlightTitle: " shop again",
              secondaryTitle: "  ",
              image: "/assets/home_shop_again.webp",
              alt: "style-club-shop",
              number: 3,
              primaryContentText: `Up your Suave game with beard & mustache styles that bring out your best features. Our grooming tips will help you find the right haircut based on your face type. What's more, we'll also help you make the right decisions on cologne, skin care & so much more!`,
            }}
          />
        </Box>
        <Box sx={boxSxStyles}>
          <RightImageLeftContentComponent
            data={{
              primaryTitle: "Need Advice? Your ",
              highlightTitle: " personal stylist",
              secondaryTitle: " is here for you",
              image: "/assets/home_need_advice.webp",
              alt: "style-club-personal-stylist",
              number: 2,
              primaryContentText: `Your personal stylist is here to help you gain insights into your own personal style. Got questions or need advice? They're available to chat and give you all the information you need right at your fingertips.`,
            }}
          />
        </Box>
      </ContainerComponent>
    </Box>
  );
};

export default HomePersonalStylistContainer;
