import React from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderRadius: 0,
  "&.Mui-error": {
    border: `1px solid ${theme.palette.error.main}`,
    ":after": { borderBottom: "none" },
  },
  "& input::placeholder": {
    color: theme.palette.grey[700],
  },
  ":before": {
    borderBottomColor: theme.palette.primary.main,
    borderBottomWidth: "2px",
  },
  ":after": {
    borderBottomColor: theme.palette.primary.main,
    borderBottomWidth: "2px",
  },
}));

interface FormInputBaseProps {
  id: string;
  name: string;
  label?: string;
}

const FormInputBase: React.FC<FormInputBaseProps> = ({ id, name, label }) => {
  return <StyledInputBase id={id} name={name} placeholder="Hello" />;
};

export default FormInputBase;
