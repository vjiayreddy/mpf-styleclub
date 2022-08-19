import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import Image from "next/image";
import LinkIconButton from "../LinkIconButton";
import { Button } from "@mui/material";

interface ProductCardProps {
  imgUrl: string;
  title: string;
  price: number;
}

const StyledImageBoxWrapper = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 15,
  flexDirection: "column",
  height: "100%",
  borderRadius: 5,
}));

const StyledCardTitle = styled(Typography)<{ component: any }>(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.BASE_BLACK,
  textAlign: "center",
}));

const StyledFlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const StyledCardPrice = styled(Typography)<{ component: any }>(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.BASE_BLACK_30,
  marginTop: 10,
  marginBottom:10,
  textAlign: "center",
}));
const ProductCard: React.FC<ProductCardProps> = ({ imgUrl, title, price }) => {
  return (
    <StyledImageBoxWrapper>
      <Box>
        <Image
          src={imgUrl}
          width={300}
          height={400}
          placeholder="blur"
          blurDataURL={imgUrl}
        />
      </Box>
      <Box pt={2} sx={{ width: "100%" }}>
        <Grid item xs={12}>
          <StyledCardTitle noWrap variant="body1" component="p">
            {title}
          </StyledCardTitle>
        </Grid>
        <Grid item xs={12}>
          <StyledCardPrice component="p" variant="subtitle2">
            ${price}
          </StyledCardPrice>
          <StyledFlexBox>
            <Button fullWidth={true} variant="contained" color="secondary">
              Add To Cart
            </Button>
            <Button fullWidth={true} variant="contained" color="primary">
              Add To Wishlist
            </Button>
          </StyledFlexBox>
        </Grid>
      </Box>
    </StyledImageBoxWrapper>
  );
};

export default ProductCard;
