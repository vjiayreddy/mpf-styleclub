import React from "react";
import Grid from "@mui/material/Grid";
import SectionTypographyComponent from "../../components/uiElements/SectionTypography/SectionTypography";
import {
  StyledSectionContainer,
  SxSectionContentStyles,
  SxSectionTitleStyles,
  StyledLeftSideGridBox,
  StyledRightSideGridBox,
  StyledLeftSideImage,
} from "./styled";
import Box from "@mui/material/Box";
import ContainerComponent from "../../components/uiElements/Container/Container";
SectionTypographyComponent;
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
        <Grid container>
          <Grid item md={7}>
            <StyledLeftSideGridBox>
              <StyledLeftSideImage
                placeholder="blur"
                blurDataURL="/assets/home_perfect_styled.jpg"
                alt="perfect-styled"
                src="/assets/home_perfect_styled.jpg"
                layout="fill"
                loading="lazy"
              />
            </StyledLeftSideGridBox>
          </Grid>
          <Grid sx={{ padding: 0 }} item md={5}>
            <StyledRightSideGridBox>
              <SectionTypographyComponent
                titleComponent="h3"
                highlightTitle="perfectly styled"
                titleVarient="heading_small"
                primaryTitle="Be "
                contentVarient="content_small"
                secondaryTitle="  all the times"
                primaryContentText={`Attending a wedding or traveling offsite? Discover the right looks for every occasion. Learn the right sizes, shapes, colours and get styling tips that gratify your body, personality and lifestyle.`}
              />
            </StyledRightSideGridBox>
          </Grid>
        </Grid>
      </ContainerComponent>
    </Box>
  );
};

export default HomePersonalStylistContainer;
