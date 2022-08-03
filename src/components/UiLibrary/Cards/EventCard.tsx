import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ContainerComponent from "../../uiElements/Container/Container";
import Image from "next/image";
import { Typography } from "@mui/material";
import LinkIconButton from "../LinkIconButton";
const StyledEventBox = styled(Box)(() => ({
    padding: 50,
}));

const StyledEventContentBox = styled(Box)(() => ({
    padding: 14,
}));
const StyledEventTitle = styled(Typography)<{ component: any }>(
    ({ theme }) => ({
        fontSize: `35px !important`,
        color: theme.palette.secondary.main,
    })
);
const StyledEventContent = styled(Typography)<{ component: any }>(
    ({ theme }) => ({
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 20
    })
);

const EventCard = () => {
    return (
        <ContainerComponent>
            <StyledEventBox>
                <Grid container alignItems="stretch">
                    <Grid container alignItems="center" justifyContent="center" md={4}>
                        <Grid item xs={12}>
                            <Image
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="/assets/images/event-1.webp"
                                width={500}
                                height={600}
                                src="/assets/images/event-1.webp"
                                alt="style-club-event"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        md={4}
                    >
                        <StyledEventContentBox>
                            <StyledEventTitle align="center" variant="h6" component="h5">
                                New 2021 Summer Collection
                            </StyledEventTitle>
                            <StyledEventContent align="center" variant="body1" component="p">
                                A conscious collection made entirely from food crop waste,
                                recycled cotton, other more sustainable materials
                            </StyledEventContent>
                        </StyledEventContentBox>
                        <Box>
                            <LinkIconButton label="Learn More" onClick={() => { }} />
                        </Box>
                    </Grid>
                    <Grid container alignItems="center" justifyContent="center" md={4}>
                        <Image
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL="/assets/images/event-2.webp"
                            width={500}
                            height={600}
                            src="/assets/images/event-2.webp"
                            alt="style-club-event"
                        />
                    </Grid>
                </Grid>
            </StyledEventBox>
        </ContainerComponent>
    );
};

export default EventCard;
