import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Image from "next/image";

interface TabImageIconComponentProps {
  alt: string;
  image: string;
  iconHeight: number;
  iconWidth: number;
  [x: string]: any;
}

const StyledTabImageIconBox = styled(Box)(({ theme, borderColor }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  borderRadius: 5,
  overflow: "hidden",
}));

const StyledTabImage = styled(Image)(({ theme }) => ({
  //borderRadius: 5,
}));

const TabImageIconComponent: React.FC<TabImageIconComponentProps> = ({
  alt,
  image,
  iconHeight,
  iconWidth,
  ...props
}) => {
  return (
    <StyledTabImageIconBox {...props}>
      <StyledTabImage
        alt={alt}
        src={image}
        width={iconWidth}
        height={iconHeight}
        layout="fixed"
        blurDataURL={image}
        placeholder="blur"
      />
    </StyledTabImageIconBox>
  );
};

export default TabImageIconComponent;
