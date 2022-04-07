import React from "react";
import Button from "@mui/material/Button";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

const WithIconButton = () => {
  return (
    <Button variant="outlined" startIcon={<ArrowCircleDownIcon />}>
      IconButton
    </Button>
  );
};
export default WithIconButton;
