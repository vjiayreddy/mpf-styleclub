import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import SectionTypographyComponent from "../../components/uiElements/SectionTypography/SectionTypography";
import {
  StyledImageBoxWrapper,
  StyledRightSideImage,
  StyledLeftSideContentGridBox,
  StyledNumberCircle,
  SxLeftSideTitleStyles,
  StyledShowcaseBorder,
  StyledShowGridIcon,
} from "./styled";
import { HomePersonalStylistCardProps } from "./LeftImageContentRight";

const RightImageLeftContentComponent: React.FC<HomePersonalStylistCardProps> =
  ({ data }) => {
    const theme = useTheme();
    const isSmDevice = useMediaQuery(theme.breakpoints.down("sm"));
    return (
      <Grid direction={isSmDevice ? "column-reverse" : "row"} container>
        <Grid item xs={12} md={5}>
          <StyledLeftSideContentGridBox>
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
            <StyledShowcaseBorder variant="Right" />
            <StyledShowGridIcon
              variant="Right"
              alt="grid_icon"
              src="/assets/grid.png"
            />
          </StyledLeftSideContentGridBox>
        </Grid>
        <Grid xs={12} item md={7}>
          <StyledImageBoxWrapper>
            <StyledRightSideImage
              placeholder="blur"
              blurDataURL={data.image}
              alt={data.alt}
              src={data.image}
              layout="fill"
              loading="lazy"
            />
          </StyledImageBoxWrapper>
        </Grid>
      </Grid>
    );
  };

export default RightImageLeftContentComponent;
