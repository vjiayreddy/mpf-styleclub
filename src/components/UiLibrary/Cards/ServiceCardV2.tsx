import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface ServiceCardV2Props {
  component: React.ReactNode;
  title: string;
  subtitle: string;
}

const StyledTitle = styled(Typography)<{ component: any }>(({ theme }) => ({
  marginBottom: 5,
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const StyledSubTitle = styled(Typography)<{ component: any }>(({ theme }) => ({
  display: "block",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const StyledIconBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  paddingRight: 10,
  [theme.breakpoints.down("sm")]: {
    paddingRight: 0,
  },
}));

const ServiceCardV2: React.FC<ServiceCardV2Props> = ({
  component,
  title,
  subtitle,
}) => {
  return (
    <Box p={1}>
      <Grid container alignItems="center">
        <Grid alignSelf="center" xs={12} sm={2} md={2} item>
          <StyledIconBox>{component}</StyledIconBox>
        </Grid>
        <Grid direction="column" container xs item>
          <Grid item xs={12}>
            <StyledTitle variant="overline" component="span">
              {title}
            </StyledTitle>
            <StyledSubTitle variant="caption" component="span">
              {subtitle}
            </StyledSubTitle>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceCardV2;
