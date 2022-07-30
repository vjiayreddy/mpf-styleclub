import React from "react";
import ContainerComponent from "../../uiElements/Container/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Button from "@mui/material/Button";

const StyledLeftImageContentBox = styled(Box)(() => ({
    padding: 50,
}));

const StyledGridContainer = styled(Grid)(() => ({}));
const StyledImageBox = styled(Box)(({ theme }) => ({
    width: 500,
    height: 500,
    overflow: "hidden",
    borderRadius: 10,
    margin: "0 auto",
}));

const StyledContentTypography = styled(Typography)<{ component: any }>(() => ({
    width: "75%",
    marginBottom: 40
}));
const StyledTitleTypography = styled(Typography)<{ component: any }>(({ }) => ({
    width: "80%",
}));

const LeftImageContentCard = () => {
    return (
        <ContainerComponent>
            <StyledLeftImageContentBox>
                <StyledGridContainer container spacing={3} alignItems="center">
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        item
                        md={6}
                        lg={6}
                        xl={6}
                    >
                        <Grid item xs={12}>
                            <StyledImageBox>
                                <Image
                                    alt="mpf-styleclub-suits"
                                    placeholder="blur"
                                    blurDataURL="/assets/images/men_with_suit.webp"
                                    loading="lazy"
                                    width={500}
                                    height={500}
                                    src="/assets/images/men_with_suit.webp"
                                />
                            </StyledImageBox>
                        </Grid>
                    </Grid>
                    <Grid container flexDirection="column" item md={6} lg={6} xl={6}>
                        <Grid sx={{ paddingLeft: "40px" }} item xs={12}>
                            <StyledTitleTypography
                                color="secondary"
                                gutterBottom
                                variant="h5"
                                component="h5"
                            >
                                Be perfectly styled all the times
                            </StyledTitleTypography>
                            <StyledContentTypography
                                gutterBottom
                                variant="body1"
                                component="p"
                            >
                                Attending a wedding or traveling offsite? Discover the right
                                looks for every occasion. Learn the right sizes, shapes, colors
                                and get styling tips that gratify your body, personality and
                                lifestyle.
                            </StyledContentTypography>
                        </Grid>
                        <Grid sx={{ paddingLeft: "40px" }} item xs={12}>
                            <Button sx={{ width: 200 }} id="btn-learn-more" variant="contained" color="secondary" >LEARN MORE</Button>
                        </Grid>
                    </Grid>
                </StyledGridContainer>
            </StyledLeftImageContentBox>
        </ContainerComponent>
    );
};

export default LeftImageContentCard;
