import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material";
import { SxProps } from "@mui/system";

interface LoadingButtonProps {
  id: string;
  label: string;
  iconSx?: SxProps;
  loading?: boolean;
  disableBg?: string;
  disableColor?: string;
  [x: string]: any;
}

// interface StyledLoadingButtonProps {
//   disableBg?: string;
//   disableColor?: string;
// }

const StyledCircleProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const StyledLoadingButton = styled(Button)(({ theme }) => ({
  // "&.Mui-disabled": {
  //   backgroundColor: disableBg,
  //   color: disableColor ? disableColor : theme.palette.common.white,
  // },
}));

export const LoadingButtonComponent: React.FC<LoadingButtonProps> = ({
  id,
  label,
  iconSx,
  loading,
  disableBg,
  disableColor,
  ...props
}) => {
  return (
    <StyledLoadingButton
      // disableBg={disableBg}
      // disableColor={disableColor}
      id={id}
      {...props}
      startIcon={
        loading ? <StyledCircleProgress size={16} sx={iconSx} /> : null
      }
    >
      {label}
    </StyledLoadingButton>
  );
};

export default LoadingButtonComponent;
