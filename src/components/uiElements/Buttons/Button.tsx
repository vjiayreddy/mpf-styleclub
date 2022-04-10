import React from "react";
import Button from "@mui/material/Button";

interface ButtonProps {
  id: string;
  title: string;
  onClick: () => void;
  [x: string]: any;
}

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
