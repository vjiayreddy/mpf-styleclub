import Grid from "@mui/material/Grid";
import React from "react";
import SectionTypographyComponent from "../../components/uiElements/SectionTypography/SectionTypography";
import {
  StyledImageBoxWrapper,
  StyledLeftSideImage,
  StyledNumberCircle,
  StyledRightSideContentGridBox,
  StyledShowcaseBorder,
  StyledShowGridIcon,
  SxLeftSideTitleStyles,
} from "./styled";

export interface HomePersonalStylistCardProps {
  data: {
    primaryTitle: string;
    highlightTitle: string;
    secondaryTitle: string;
    primaryContentText: string;
    image: string;
    alt: string;
    number: number;
  };
}

const LeftImageContentRightComponent: React.FC<HomePersonalStylistCardProps> =
  ({ data }) => {
    return (
      <Grid container>
        <Grid item md={7}>
          <StyledImageBoxWrapper>
            <StyledLeftSideImage
              placeholder="blur"
              blurDataURL={data.image}
              alt={data.alt}
              src={data.image}
              layout="fill"
              loading="lazy"
            />
          </StyledImageBoxWrapper>
        </Grid>
        <Grid sx={{ padding: 0 }} item md={5}>
          <StyledRightSideContentGridBox>
            <StyledNumberCircle>
              <span>{data.number}</span>
            </StyledNumberCircle>
            <SectionTypographyComponent
              titleSx={SxLeftSideTitleStyles}
              titleComponent="h3"
              highlightTitle={data.highlightTitle}
              titleVarient="heading_small"
              primaryTitle={data.primaryTitle}
              contentVarient="content_small"
              secondaryTitle={data.secondaryTitle}
              primaryContentText={data.primaryContentText}
            />
            <StyledShowcaseBorder variant="left" />
            <StyledShowGridIcon variant="left" alt="grid_icon" src="/assets/grid.png" />
          </StyledRightSideContentGridBox>
        </Grid>
      </Grid>
    );
  };

export default LeftImageContentRightComponent;
