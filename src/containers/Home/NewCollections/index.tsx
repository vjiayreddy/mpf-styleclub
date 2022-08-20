import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TitleWithSubtile from "../../../components/UiLibrary/Typography/TitleWithSubtile";
import ContainerComponent from "../../../components/uiElements/Container/Container";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import LinkIconButton from "../../../components/UiLibrary/LinkIconButton";
import { Theme } from "react-toastify";

const StyledNewCollectionsBox = styled(Box)(() => ({
  paddingTop: 150,
}));

const StyledNewCollectionsGrid = styled(Grid)(() => ({
  paddingTop: 75,
  paddingLeft: 24,
  paddingRight: 24,
  paddingBottom: 75,
}));

const StyledNewCollectionsImageBox = styled(Box)(() => ({
  height: "400px",
  width: "100%",
  position: "relative",
  overflow: "hidden",
}));
const StyledNCContent = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const StyledNCContentTitle = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    color: theme.palette.common.white,
    padding: 10,
  })
);

const NewCollections = () => {
  return (
    <ContainerComponent>
      <StyledNewCollectionsBox id="new-collection-box">
        <TitleWithSubtile
          titleVariant="h3"
          subTitleSx={{ width: { md: "40%", margin: "0 auto" } }}
          titleComponent="h3"
          title="Best Picks 2021"
          subTitle="A conscious collection made entirely from food crop waste, recycled cotton, other more sustainable materials."
        />
        <StyledNewCollectionsGrid container spacing={3} alignItems="stretch">
          <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
            <StyledNewCollectionsImageBox>
              <Image
                style={{ filter: "brightness(80%)" }}
                placeholder="blur"
                loading="lazy"
                blurDataURL="/assets/images/fashion-trend.webp"
                alt="fashion-trend"
                src="/assets/images/fashion-trend.webp"
                layout="fill"
                objectFit="cover"
              />
              <StyledNCContent>
                <StyledNCContentTitle variant="h4" component="h6">
                  New Collections
                </StyledNCContentTitle>
                <LinkIconButton
                  btnSx={(theme: any) => ({
                    color: theme.palette.common.white,
                    fontWeight: 500,
                  })}
                  label="Shop now"
                  onClick={() => {}}
                />
              </StyledNCContent>
            </StyledNewCollectionsImageBox>
          </Grid>
          <Grid item xs={12} md={8} sm={6} lg={8} xl={8}>
            <StyledNewCollectionsImageBox>
              <Image
                placeholder="blur"
                loading="lazy"
                blurDataURL="/assets/images/accessories.webp"
                alt="fashion-trend"
                src="/assets/images/accessories.webp"
                layout="fill"
                objectFit="cover"
              />
              <StyledNCContent>
                <StyledNCContentTitle
                  sx={(theme: any) => ({
                    color: theme.palette.common.black,
                    fontWeight: 500,
                  })}
                  variant="h4"
                  component="h6"
                >
                  Best Accessories
                </StyledNCContentTitle>
                <LinkIconButton
                  btnSx={(theme: any) => ({
                    color: theme.palette.common.black,
                    fontWeight: 500,
                  })}
                  label="Shop now"
                  onClick={() => {}}
                />
              </StyledNCContent>
            </StyledNewCollectionsImageBox>
          </Grid>
          <Grid item xs={12} md={8} sm={6} lg={8} xl={8}>
            <StyledNewCollectionsImageBox>
              <Image
                style={{ filter: "brightness(60%)" }}
                placeholder="blur"
                loading="lazy"
                blurDataURL="/assets/images/studio.webp"
                alt="fashion-trend"
                src="/assets/images/studio.webp"
                layout="fill"
                objectFit="cover"
              />
              <StyledNCContent>
                <StyledNCContentTitle variant="h4" component="h6">
                  Our Studio
                </StyledNCContentTitle>
                <LinkIconButton
                  btnSx={(theme: any) => ({
                    color: theme.palette.common.white,
                    fontWeight: 500,
                  })}
                  label="Learn More"
                  onClick={() => {}}
                />
              </StyledNCContent>
            </StyledNewCollectionsImageBox>
          </Grid>
          <Grid item xs={12} md={4} sm={6} lg={4} xl={4}>
            <StyledNewCollectionsImageBox>
              <Image
                style={{ filter: "brightness(80%)" }}
                placeholder="blur"
                loading="lazy"
                blurDataURL="/assets/images/trendy.webp"
                alt="fashion-trend"
                src="/assets/images/trendy.webp"
                layout="fill"
                objectFit="cover"
              />
              <StyledNCContent>
                <StyledNCContentTitle variant="h4" component="h6">
                  Men Fashion
                </StyledNCContentTitle>
                <LinkIconButton
                  btnSx={(theme: any) => ({
                    color: theme.palette.common.white,
                    fontWeight: 500,
                  })}
                  label="Learn More"
                  onClick={() => {}}
                />
              </StyledNCContent>
            </StyledNewCollectionsImageBox>
          </Grid>
        </StyledNewCollectionsGrid>
      </StyledNewCollectionsBox>
    </ContainerComponent>
  );
};

export default NewCollections;
