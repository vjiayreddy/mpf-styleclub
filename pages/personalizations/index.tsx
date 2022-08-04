import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledProfileName = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    color: theme.palette.common.white,
    fontWeight: 400,
  })
);

const StyledSpan = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const StyledProfileBanner = styled(Box)(({ theme }) => ({
  height: 450,
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));
const StyledProfileBannerContent = styled(Box)(({ theme }) => ({
  flex: 4,
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Personalizations = () => {
  return (
    <Box>
      <StyledProfileBanner>
        <StyledProfileBannerContent>
          <Grid
            container
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Image
                alt="user-profile-avatar"
                blurDataURL="/assets/clients/2.jpg"
                placeholder="blur"
                width={120}
                style={{ borderRadius: 100 }}
                height={120}
                src="/assets/clients/2.jpg"
              />
            </Grid>
            <Grid item>
              <Box p={3}>
                <StyledProfileName
                  textAlign="center"
                  variant="h5"
                  component="h6"
                >
                  <StyledSpan>Firoz</StyledSpan> Calvin.
                </StyledProfileName>
                <Typography textAlign="center" variant="body1" component="p">
                  Style Club Member
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </StyledProfileBannerContent>
      </StyledProfileBanner>
    </Box>
  );
};

export default Personalizations;
