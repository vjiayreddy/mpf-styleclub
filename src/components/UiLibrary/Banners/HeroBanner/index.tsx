import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ContainerComponent from "../../../uiElements/Container/Container";

interface HeroBannerProps {
    bannerPrimaryTitle: string;
    bannerSecondaryTitle?: string;
    bannerImgUrl: string;
    bannerSpan?: string;
    bannerBtnLbl?: string;
    onClickButton?: () => void;
}

const StyledHomeSliderBox = styled(Box)(() => ({
    height: 550,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
}));

const StyledHomeSliderContentBox = styled(Box)(() => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingLeft: 100,
    paddingRight: 100,
}));

const StyledHomeSliderTitle = styled(Typography)<{ component: any }>(
    ({ theme }) => ({
        color: theme.palette.secondary.main,
        fontWeight: 900,
        marginBottom: 40,
    })
);

const StyledSpan = styled("span")(({ theme }) => ({
    color: theme.palette.primary.main,
}));

const HeroBanner: React.FC<HeroBannerProps> = ({
    bannerPrimaryTitle,
    bannerSecondaryTitle,
    bannerImgUrl,
    bannerSpan,
    bannerBtnLbl,
    onClickButton,
}) => {
    return (
        <ContainerComponent width="xl">
            <StyledHomeSliderBox>
                <StyledHomeSliderContentBox>
                    <Grid container alignItems="center">
                        <Grid item xs={12}>
                            <StyledHomeSliderTitle variant="h3" component="h1">
                                {bannerPrimaryTitle}
                                <br /> {bannerSpan && <StyledSpan>Featured</StyledSpan>}{" "}
                                {bannerSecondaryTitle}
                            </StyledHomeSliderTitle>
                            <Box>
                                <Button
                                    id={`btn-${bannerBtnLbl}`}
                                    onClick={onClickButton}
                                    sx={{ width: 200 }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    {bannerBtnLbl}
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </StyledHomeSliderContentBox>
                <Image
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={bannerImgUrl}
                    src={bannerImgUrl}
                />
            </StyledHomeSliderBox>
        </ContainerComponent>
    );
};

export default HeroBanner;