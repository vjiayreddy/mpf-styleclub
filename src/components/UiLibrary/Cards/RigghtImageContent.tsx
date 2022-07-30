import React from "react";
import ContainerComponent from "../../uiElements/Container/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Button from "@mui/material/Button";

const StyledRightImageContentBox = styled(Box)(() => ({
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
    marginLeft: 'auto',
    marginBottom: 40,
    textAlign: "right"
}));
const StyledTitleTypography = styled(Typography)<{ component: any }>(({ }) => ({
    width: "80%",
    textAlign: "right",
    marginLeft: 'auto',
}));

const RightImageContentCard = () => {
    return (
        <ContainerComponent>
            <StyledRightImageContentBox>
                <StyledGridContainer container spacing={3} alignItems="center">
                    <Grid container alignItems="flex-end" flexDirection="column" item md={6} lg={6} xl={6}>
                        <Grid sx={{paddingRight:"40px"}} item xs={12}>
                            <StyledTitleTypography
                                color="secondary"
                                gutterBottom
                                variant="h5"
                                component="h5"
                            >
                                Get groomed to complete your look
                            </StyledTitleTypography>
                            <StyledContentTypography
                                gutterBottom
                                variant="body1"
                                component="p"
                            >
                                Up your Suave game with beard & mustache styles that bring out your best features. Our grooming tips will help you find the right haircut based on your face type. What's more, we'll also help you make the right decisions on cologne, skin care & so much more!
                            </StyledContentTypography>
                        </Grid>
                        <Grid item sx={{paddingRight:"40px"}} xs={12}>
                            <Button sx={{ width: 200 }} id="btn-learn-more" variant="contained" color="secondary" >LEARN MORE</Button>
                        </Grid>
                    </Grid>
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
                                    blurDataURL="/assets/images/groomed.webp"
                                    loading="lazy"
                                    width={500}
                                    height={500}
                                    src="/assets/images/groomed.webp"
                                />
                            </StyledImageBox>
                        </Grid>
                    </Grid>

                </StyledGridContainer>
            </StyledRightImageContentBox>
        </ContainerComponent>
    );
};

export default RightImageContentCard;
