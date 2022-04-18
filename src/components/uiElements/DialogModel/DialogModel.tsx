import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

interface DialogModelComponentProps {
  open: boolean;
  [x: string]: any;
  children: React.ReactNode;
}

export const DialogModelComponent: React.FC<DialogModelComponentProps> = ({
  open,
  children,
  ...props
}) => {
  return (
    <Dialog {...props} open={open}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default DialogModelComponent;
