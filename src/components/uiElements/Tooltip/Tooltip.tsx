import React, { ReactElement } from "react";
import Tooltip from "@mui/material/Tooltip";

interface TooltipComponentProps {
  component: ReactElement;
  [x: string]: any;
  title: string;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  component,
  title,
  ...props
}) => {
  return (
    <Tooltip {...props} arrow title={title}>
      {component}
    </Tooltip>
  );
};

export default TooltipComponent;
