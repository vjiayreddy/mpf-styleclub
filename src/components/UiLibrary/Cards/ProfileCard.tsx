import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import LinkIconButton from "../LinkIconButton";
const StyledProfileCardBox = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  padding: 15,
}));

const StyledPercentageLable = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
}));

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}></Box>
    </Box>
  );
}

const StyledProfileName = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: 700,
    lineHeight: 1,
  })
);

const StyledProfileEmail = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    lineHeight: 1,
    marginTop: 10,
    marginBottom: 10,
  })
);

export const ProfileCard = () => {
  return (
    <StyledProfileCardBox>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Image
            loading="lazy"
            placeholder="blur"
            width={75}
            height={75}
            style={{ borderRadius: 10 }}
            blurDataURL="/assets/clients/1.jpg"
            alt="user-profile"
            src="/assets/clients/1.jpg"
          />
        </Grid>
        <Grid item xs={8}>
          <StyledProfileName variant="subtitle2" component="p">
            Rahul Kumar
          </StyledProfileName>
          <StyledProfileEmail variant="body2" component="span">
            rahulkumar@gmail.com
          </StyledProfileEmail>
          <Box mt={1} mb={1}>
            <Typography variant="caption" component="p">
              Personalization Completion (50%)
            </Typography>
          </Box>
          <Box>
            <LinearProgressWithLabel value={50} />
          </Box>
        </Grid>
      </Grid>
    </StyledProfileCardBox>
  );
};
