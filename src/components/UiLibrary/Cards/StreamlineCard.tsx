import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Typography } from "@mui/material";
import LinkIconButton from "../LinkIconButton";


const StyledCardBox = styled(Box)(() => ({}));

const StyledCartImage = styled(Box)(() => ({
    width: "100%",
    height: "auto",
    borderRadius: 10,
    overflow: "hidden",
}));

const StyledCardFooter = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
}));

const StyledCaptionLabel = styled(Typography)<{ component: React.ReactNode }>(
    ({ theme }) => ({
        fontSize: 14,
        color: theme.palette.grey[600],
    })
);

const StyledMainTitle = styled(Typography)<{ component: React.ReactNode }>(
    ({ theme }) => ({
        fontSize: 23,
    })
);

const StreamlineCard = () => {
    return (
        <StyledCardBox>
            <StyledCartImage>
                <Image
                    style={{ borderRadius: 10 }}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="/assets/images/girl.jpg"
                    alt="girl"
                    layout="intrinsic"
                    width={324}
                    height={300}
                    src="/assets/images/girl.jpg"
                />
            </StyledCartImage>
            <StyledCardFooter>
                <Box>
                    <StyledCaptionLabel variant="caption" component="span">
                        Download Templates
                    </StyledCaptionLabel>
                </Box>
                <Box>
                    <StyledMainTitle variant="h6" component="p">
                        Beautiful landing pages
                    </StyledMainTitle>
                </Box>
                <Box>
                    <LinkIconButton btnId="btn-download" label="Download Now" onClick={() => { return }} btnColor="inherit" />
                </Box>
            </StyledCardFooter>
        </StyledCardBox>
    );
};

export default StreamlineCard;
