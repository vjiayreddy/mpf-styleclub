import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Image from "next/image";

interface ProductCardProps {
  imgUrl: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imgUrl, title }) => {
  return (
    <Box>
      <Image
        src={imgUrl}
        width={200}
        height={250}
        placeholder="blur"
        blurDataURL={imgUrl}
      />
      <Box p={2}>
        <Typography variant="body1" component="p">
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
