import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import LinkIconButton from "../LinkIconButton";

const StyledCardBox = styled(Box)(({ theme }) => ({
    ...theme.globalCardStyle,
}));
const StyledCardImage = styled(Box)(({ theme }) => ({
    width: 167,
    height: 167,
    borderRadius: 10,
    backgroundColor: theme.palette.grey[400],
    overflow: "hidden",
}));
const StyledCardInfoBox = styled(Box)(() => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
}));

const StyledCardTitle = styled(Typography)<{ component: React.ReactNode }>(
    () => ({
        fontSize: 20,
    })
);

const StyledCardContent = styled(Typography)<{ component: React.ReactNode }>(
    () => ({
        fontSize: 16,
        lineHeight: "25.6px",
    })
);

const RewardCard = () => {
    return (
        <StyledCardBox>
            <Card>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item>
                            <StyledCardImage>
                                <Image
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL="/assets/images/girl.jpg"
                                    alt="girl"
                                    src="/assets/images/girl.jpg"
                                    width={167}
                                    height={167}
                                    layout="fixed"
                                />
                            </StyledCardImage>
                        </Grid>
                        <Grid item xs>
                            <StyledCardInfoBox>
                                <StyledCardTitle gutterBottom component="h6" variant="h6">
                                    Download Templates
                                </StyledCardTitle>
                                <StyledCardContent gutterBottom component="p" variant="body2">
                                    Muffin lemon drops toffee. Pudding tootsie roll brownie jelly
                                    beans.
                                </StyledCardContent>
                                <Box>
                                    <LinkIconButton btnColor="inherit" btnId="btn-learn-more" onClick={() => { return; }} label="Learn More" />
                                </Box>
                            </StyledCardInfoBox>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </StyledCardBox>
    );
};

export default RewardCard;
