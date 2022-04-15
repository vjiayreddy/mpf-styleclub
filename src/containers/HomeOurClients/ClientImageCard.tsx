import React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Image from "next/image";

interface ClientImageCardComponentProps {
  image: string;
  index: number;
  [x: string]: any;
}

const StyledCard = styled(Card)(({ theme }) => ({
  "&.MuiCard-root": {
    overflow: "hidden",
    boxShadow: `rgba(0, 0, 0, 0.16) 0px 1px 4px`,
    borderTopLeftRadius: "30px",
    width: "100%",
    height: 345,
    position: "relative",
    border: `10px solid ${theme.palette.common.white}`,
  },
}));
const StyledCardImage = styled(Image)(({ theme }) => ({
  objectFit: "cover",
}));

const ClientImageCardComponent: React.FC<ClientImageCardComponentProps> = ({
  image,
  index,
  ...props
}) => {
  return (
    <StyledCard {...props}>
      <StyledCardImage
        alt={`style-club-client-${index}`}
        loading="lazy"
        layout="fill"
        src={image}
        placeholder="blur"
        blurDataURL={image}
      />
    </StyledCard>
  );
};

export default ClientImageCardComponent;
