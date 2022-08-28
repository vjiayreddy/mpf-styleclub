import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import NextLink from "next/link";
import Image from "next/image";
import IconButton from "../IconButton";
import CartIcon from "../Icon/components/CartIcon";

interface ProductCardProps {
  imgUrl: string;
  title: string;
  price: number;
  name: string;
}

const StyledImageBoxWrapper = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[200]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 15,
  flexDirection: "column",
  borderRadius: 5,
}));

const StyledCardTitle = styled(Typography)<{ component: any }>(({ theme }) => ({
  fontWeight: 500,
  color: theme.palette.BASE_BLACK,
  textAlign: "left",
  "&:hover": {
    cursor: 'pointer'
  }
}));

const StyledCardPrice = styled(Typography)<{ component: any }>(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.primary.main,
  marginTop: 10,
  marginBottom: 10,
  textAlign: "left",
}));
const ProductCard: React.FC<ProductCardProps> = ({
  imgUrl,
  title,
  price,
  name,
}) => {
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
          <NextLink href={`/shop/${name}`} passHref>
            <StyledCardTitle noWrap variant="body1" component="p">
              {title}
            </StyledCardTitle>
          </NextLink>
        </Grid>
        <Grid item container alignItems="center" xs={12}>
          <Grid item xs>
            <StyledCardPrice component="p" variant="subtitle1">
              ${price}
            </StyledCardPrice>
          </Grid>
          <Grid item>
            <IconButton onClick={() => { }} icon={<CartIcon />} />
          </Grid>
          {/* <StyledFlexBox>
            <Button fullWidth={true} variant="contained" color="secondary">
              Add To Cart
            </Button>
            <Button fullWidth={true} variant="contained" color="primary">
              Add To Wishlist
            </Button>
          </StyledFlexBox> */}
        </Grid>
      </Box>
    </StyledImageBoxWrapper>
  );
};

export default ProductCard;
