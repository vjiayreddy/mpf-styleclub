import React from "react";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { SxProps } from "@mui/material";

interface PopperWrapperProps {
  open: boolean;
  anchorEl?: any;
  component: React.ReactNode;
  paperSx?: SxProps;
  popperStyles?: React.CSSProperties;
  onClose: () => void;
}
const PopperWrapper: React.FC<PopperWrapperProps> = ({
  open = false,
  anchorEl,
  component,
  paperSx,
  popperStyles,
  onClose,
}) => {
  return (
    <Popper
      style={popperStyles}
      open={open}
      anchorEl={anchorEl}
      role={undefined}
      transition
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Paper sx={paperSx}>
            <ClickAwayListener onClickAway={onClose}>
              <>{component}</>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default PopperWrapper;
