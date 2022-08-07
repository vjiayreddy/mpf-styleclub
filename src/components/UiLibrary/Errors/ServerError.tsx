import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Image from "next/image";

const StyledServerErrorBox = styled(Box)(() => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const StyledServerErrorMessage = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    flexGrow: 1,
    width: "55%",
    margin: "0 auto",
    fontSize: 14,
    color: theme.palette.grey[500],
  })
);

const ServerError = () => {
  return (
    <StyledServerErrorBox>
      <Box>
          <Image
            alt="serer-down"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/assets/images/server.webp"
            width={350}
            height={250}
            src="/assets/images/server.webp"
          />
        </Box>
      <Box>
        <Typography align="center" variant="h6" component="h6">
          Whoops! Lost in Space?
        </Typography>
        <StyledServerErrorMessage variant="body1" component="p" align="center">
          Lorem Ipsum is simply dummy of the printing and typesetting industry.
          Lorem Ipsum is simply.
        </StyledServerErrorMessage>
      </Box>
      <Box mt={3}>
        <Button variant="contained" color="secondary">
          Back To Home
        </Button>
      </Box>
    </StyledServerErrorBox>
  );
};

export default ServerError;
