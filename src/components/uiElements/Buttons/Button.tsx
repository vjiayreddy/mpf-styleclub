import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

interface ButtonProps {
  id: string;
  title: string;
  onClick: () => void;
  [x: string]: any;
}

const StyledLoadingBox = styled(Box)(({ theme }) => ({}));

const ButtonComponent: React.FC<ButtonProps> = ({
  id,
  title,
  onClick,
  ...props
}) => {
  return (
    <Button id={id} onClick={onClick} {...props}>
      {title}
    </Button>
  );
};

export default ButtonComponent;
