import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material";
import { SxProps } from "@mui/system";
import { componentColors } from "../../../utils/types";

interface LoadingButtonProps {
  iconSx?: SxProps;
  btnColor?: componentColors;
  [x: string]: any;
}

const StyledCircleProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.common.white,
}));

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  iconSx,
  btnColor,
  ...props
}) => {
  return (
    <Button
      {...props}
      color={btnColor}
      startIcon={<StyledCircleProgress size={16} sx={iconSx} />}
    >
      Loading
    </Button>
  );
};

export default LoadingButton;
