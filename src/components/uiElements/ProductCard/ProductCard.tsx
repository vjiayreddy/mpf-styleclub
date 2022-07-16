import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledCardPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
}));
const StyledImageWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 250,
}));
const StyledImage = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
}));

const ProductCardComponent = () => {
  return (
    <StyledCardPaper elevation={0}>
      <StyledImage>
        <StyledImageWrapper>
          <Image
            alt="Image"
            objectFit="cover"
            layout="fill"
            blurDataURL="/assets/product_image.webp"
            placeholder="blur"
            src="/assets/product_image.webp"
          />
        </StyledImageWrapper>
      </StyledImage>
      <Box>
        Product Name
      </Box>
    </StyledCardPaper>
  );
};

export default ProductCardComponent;
