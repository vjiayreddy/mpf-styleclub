import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import React from "react";
import ContainerComponent from "../../../components/uiElements/Container/Container";
import TitleWithSubtile from "../../../components/UiLibrary/Typography/TitleWithSubtile";
import Image from "next/image";
import { Typography } from "@mui/material";

const StyledDStylistBox = styled(Box)(() => ({
  paddingTop: 50,
  paddingBottom: 100,
}));

const StyledGridContainer = styled(Grid)(() => ({
  paddingTop: 50,
}));

const StyledLeftContentBox = styled(Grid)(({ theme }) => ({
  padding: 75,
  minHeight: 500,
  backgroundColor: theme.palette.grey[100],
}));

const StyledImageBox = styled(Grid)(({ theme }) => ({
  position: "relative",
  minHeight: 500,
  height: "100%",
}));

const StyledDSTitle = styled(Typography)<{ component: any }>(({ theme }) => ({
  fontWeight: 500,
  marginBottom: 40,
}));

const StyledDSContent = styled(Typography)<{ component: any }>(({ theme }) => ({
  marginBottom: 40,
  color: theme.palette.grey[700],
}));

const DiscoverStylist = () => {
  return (
    <ContainerComponent>
      <StyledDStylistBox>
        <TitleWithSubtile
          titleVariant="h3"
          titleSx={{ width: { md: "50%", margin: "0 auto", lineHeight: 1.2 } }}
          subTitleSx={{ width: { md: "40%", margin: "0 auto" } }}
          titleComponent="h3"
          title="Discover a whole new way to stay stylish - with My Perfect Fit"
          subTitle="A conscious collection made entirely from food crop waste, recycled cotton, other more sustainable materials."
        />
        <StyledGridContainer container alignItems="stretch">
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <StyledLeftContentBox>
              <Grid container>
                <Grid xs={12}>
                  <Box sx={{ marginBottom: 20 }}>
                    <StyledDSTitle variant="h2" component="h6">
                      Great fabrics, latest designs
                    </StyledDSTitle>
                    <StyledDSContent variant="body1" component="p">
                      The perfect outfit demands the best fabrics. Discover a
                      range of fabrics that satisfy even the most sophisticated
                      tastes. High thread count fabrics, pure wools and
                      cashmeres are just a few fabrics among our large
                      collection.
                    </StyledDSContent>
                  </Box>
                </Grid>
              </Grid>
            </StyledLeftContentBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <StyledImageBox>
              <Image
                style={{ filter: `grayscale(1)` }}
                placeholder="blur"
                loading="lazy"
                blurDataURL="/assets/images/fabric.webp"
                alt="fashion-trend"
                src="/assets/images/fabric.webp"
                layout="fill"
                objectFit="cover"
              />
            </StyledImageBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <StyledImageBox>
              <Image
                style={{ filter: `grayscale(0)` }}
                placeholder="blur"
                loading="lazy"
                blurDataURL="/assets/images/experiences.webp"
                alt="fashion-trend"
                src="/assets/images/experiences.webp"
                layout="fill"
                objectFit="cover"
              />
            </StyledImageBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <StyledLeftContentBox>
              <Grid container>
                <Grid xs={12}>
                  <Box sx={{ marginBottom: 20 }}>
                    <StyledDSTitle variant="h2" component="h6">
                      Bespoke experience
                    </StyledDSTitle>
                    <StyledDSContent variant="body1" component="p">
                      Feel the joy of a personalized menswear shopping
                      experience. Every garment you wear is designed to match
                      your look, the occasion, your preferences and skin tone,
                      and is handcrafted to give you the perfect fit.
                    </StyledDSContent>
                  </Box>
                </Grid>
              </Grid>
            </StyledLeftContentBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <StyledLeftContentBox>
              <Grid container>
                <Grid xs={12}>
                  <Box sx={{ marginBottom: 20 }}>
                    <StyledDSTitle variant="h2" component="h6">
                      Elite service
                    </StyledDSTitle>
                    <StyledDSContent variant="body1" component="p">
                      Confused about what to wear? Our experienced stylists will
                      guide you at every step from suggesting looks and to
                      fabric recommendations to expert styling for special
                      events.
                    </StyledDSContent>
                  </Box>
                </Grid>
              </Grid>
            </StyledLeftContentBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <StyledImageBox>
              <Image
                style={{ filter: `grayscale(1)` }}
                placeholder="blur"
                loading="lazy"
                blurDataURL="/assets/images/eliteservice.webp"
                alt="fashion-trend"
                src="/assets/images/eliteservice.webp"
                layout="fill"
                objectFit="cover"
              />
            </StyledImageBox>
          </Grid>
        </StyledGridContainer>
      </StyledDStylistBox>
    </ContainerComponent>
  );
};

export default DiscoverStylist;
