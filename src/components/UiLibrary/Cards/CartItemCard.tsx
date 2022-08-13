import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Image from "next/image";
import IconButton from "../IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const StyledProductTitle = styled(Typography)<{ component: any }>(() => ({
  fontWeight: 600,
  fontSize: 16,
  lineHeight: "18px",
}));

const StyledPriceLabel = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    fontWeight: 600,
    fontSize: 14,
    lineHeight: "18px",
    color: theme.palette.grey[500],
  })
);


const CartItemCard = () => {
  return (
    <Box mb={2}>
      <Grid container spacing={3}>
        <Grid item>
          <Image
            width={80}
            height={80}
            alt="cart-image"
            src="/assets/images/girl.jpg"
          />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs={12}>
            <StyledProductTitle gutterBottom component="p" variant="subtitle2">
              Blue checked formal Ware
            </StyledProductTitle>
            <StyledPriceLabel component="p" variant="body2">
              $200
            </StyledPriceLabel>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton size="small" onClick={() => {}} icon={<CloseIcon />} />
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};

export default CartItemCard;
