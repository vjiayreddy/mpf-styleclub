import React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { SxProps } from "@mui/system";

type colors =
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";

export interface LinkIconButtonProps {
    btnId?: string;
    label: string;
    onClick: () => void;
    btnColor?: colors;
    btnSx?: SxProps;
    shoIcon?: boolean
}

const LinkIconButton: React.FC<LinkIconButtonProps> = ({
    btnId,
    label,
    onClick,
    btnColor,
    btnSx,
    shoIcon = true
}) => {
    return (
        <Button
            id={btnId}
            sx={btnSx}
            onClick={onClick}
            size="small"
            variant="text"
            color={btnColor}
            endIcon={shoIcon ? <ArrowForwardIcon /> : null}
        >
            {label}
        </Button>
    );
};

export default LinkIconButton;
