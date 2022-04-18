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
  disablebg?: string;
  disablecolor?: string;
  [x: string]: any;
}

interface StyledLoadingButtonProps {
  disablebg?: string;
  disablecolor?: string;
}

const StyledCircleProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const StyledLoadingButton = styled(Button)<StyledLoadingButtonProps>(
  ({ theme, disablebg, disablecolor }) => ({
    "&.Mui-disabled": {
      backgroundColor: disablebg,
      color: disablecolor ? disablecolor : theme.palette.common.white,
    },
  })
);

export const LoadingButtonComponent: React.FC<LoadingButtonProps> = ({
  id,
  label,
  iconSx,
  btnColor,
  loading,
  disablebg,
  disablecolor,
  ...props
}) => {
  return (
    <StyledLoadingButton
      disablebg={disablebg}
      disablecolor={disablecolor}
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
