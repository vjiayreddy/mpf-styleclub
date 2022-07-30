import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ContainerComponent from "../../uiElements/Container/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import LinkIconButton from "../LinkIconButton";

const StyledOfferCardBox = styled(Box)(({ theme }) => ({
    paddingTop: 50,
    paddingBottom: 100,
}));

const StyledOfferCardTitle = styled(Typography)<{ component: any }>(
    ({ theme }) => ({
        textAlign: "center",
        marginTop: 40,
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        fontWeight: 900,
        color: theme.palette.secondary.main,
    })
);

const StyledOfferCardFooter = styled(Box)(() => ({
    marginTop: 40,
}));

const StyledSpan = styled('span')(({ theme }) => ({
    color: theme.palette.primary.main
}))

const OfferCard = () => {
    return (
        <ContainerComponent>
            <StyledOfferCardBox>
                <Grid container alignItems="center" flexDirection="column">
                    <Grid item xs={12}>
                        <Image
                            alt="mpf-styleclub"
                            src="/assets/images/men_styles.webp"
                            width={700}
                            height={400}
                            loading="lazy"
                            blurDataURL="/assets/images/men_styles.webp"
                            placeholder="blur"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <LinkIconButton btnColor="secondary" shoIcon={false} label="#mpfstyleclub" onClick={() => { return; }} />
                    </Grid>
                    <Grid item xs={12}>
                        <StyledOfferCardTitle align="center" variant="h5" component="h4">
                            Your <StyledSpan>best looking</StyledSpan>-self is a few clicks away
                        </StyledOfferCardTitle>
                    </Grid>

                    <Grid item xs={12}>
                        <StyledOfferCardFooter>
                            <Button
                                sx={{ width: 200 }}
                                variant="contained"
                                color="secondary"
                                id="btn-access-styleclub"
                            >
                                GET ACCESS NOW
                            </Button>

                        </StyledOfferCardFooter>

                    </Grid>
                </Grid>
            </StyledOfferCardBox>
        </ContainerComponent>
    );
};

export default OfferCard;
