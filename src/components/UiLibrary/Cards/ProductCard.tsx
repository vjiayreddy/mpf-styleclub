import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

const ProductCard = () => {
  return (
    <Box>
      <Image
        src="/assets/clients/1.jpg"
        width={200}
        height={250}
        placeholder="blur"
        blurDataURL="/assets/clients/1.jpg"
      />
    </Box>
  );
};

export default ProductCard;
