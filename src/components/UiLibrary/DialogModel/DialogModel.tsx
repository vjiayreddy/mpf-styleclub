import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";
import IconButton from "../IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface DialogModelProps {
  open: boolean;
  onClose: () => void;
  component: React.ReactNode;
  [x: string]: any;
}

const StyledDialogContent = styled(DialogContent)(() => ({
  position: "relative",
}));

const StyledCloseIconBox = styled(DialogContent)(() => ({
  position: "absolute",
  top: 15,
  right: 30,
}));

const DialogModel: React.FC<DialogModelProps> = ({
  open,
  onClose,
  component,
  ...props
}) => {
  return (
    <Dialog {...props} onClose={null} open={open}>
      <StyledDialogContent>
        {component}
        <StyledCloseIconBox>
          <IconButton size="small" icon={<CloseIcon />} onClick={onClose} />
        </StyledCloseIconBox>
      </StyledDialogContent>
    </Dialog>
  );
};

export default DialogModel;
