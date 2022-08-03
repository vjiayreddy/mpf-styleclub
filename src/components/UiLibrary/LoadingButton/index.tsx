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
    disabledBg?: string;
    disableColor?: string;
    [x: string]: any;
}

interface StyledLoadingButtonProps {
    disabledBg?: string;
    disableColor?: string;
}

const StyledCircleProgress = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.common.white,
}));

const StyledLoadingButton = styled(Button)<StyledLoadingButtonProps>(
    ({ theme, disabledBg, disableColor }) => ({
        "&.Mui-disabled": {
            backgroundColor: disabledBg,
            color: disableColor ? disableColor : theme.palette.common.white,
        },
    })
);

export const LoadingButton: React.FC<LoadingButtonProps> = ({
    id,
    label,
    iconSx,
    loading,
    disabled: disableBg,
    disableColor,
    ...props
}) => {
    return (
        <StyledLoadingButton
            disabledBg={disableBg}
            disableColor={disableColor}
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

export default LoadingButton;
