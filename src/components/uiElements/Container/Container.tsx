import React from "react";
import Container from "@mui/material/Container";
import { Breakpoint } from "@mui/material";

interface ContainerComponentProps {
  width?: false | Breakpoint;
  children: React.ReactNode;
  [x: string]: any;
}

const ContainerComponent: React.FC<ContainerComponentProps> = ({
  children,
  width = "lg",
  ...props
}) => {
  return (
    <Container disableGutters {...props} maxWidth={width}>
      {children}
    </Container>
  );
};

export default ContainerComponent;
