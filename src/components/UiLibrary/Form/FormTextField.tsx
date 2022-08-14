import React, { useState, useEffect } from "react";
import InputBase from "@mui/material/InputBase";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import { SxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Control, FieldValues, useController } from "react-hook-form";
import Icon, { IconEnum } from "../Icon/Icon";

interface FormTextFieldProps {
  id: string;
  labelSx?: SxProps;
  label: string;
  clearable?: boolean;
  adornment?: React.ReactNode | string;
  name: string;
  fullWidth?: boolean;
  control: Control<FieldValues, object>;
  defaultValue?: string;
  hintMessage?: string;
  rules?: any;
  fieldType?: string;
  [x: string]: any;
}

const IconStyled = styled(Icon)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: 16,
  cursor: "pointer",
}));

const VisibilityStyled = styled(Visibility)(({ theme }) => ({
  color: theme.palette.secondary.main,
  width: "20px",
  height: "20px",
}));

const VisibilityOffStyled = styled(VisibilityOff)(({ theme }) => ({
  color: theme.palette.secondary.main,
  width: "20px",
  height: "20px",
}));

const adornmentMap = {
  search: <IconStyled name={IconEnum.Search} />,
};

const FormTextField: React.FC<FormTextFieldProps> = ({
  id,
  labelSx,
  label,
  control,
  rules,
  fieldType,
  clearable,
  defaultValue="",
  adornment,
  hintMessage,
  fullWidth = true,
  name,
  ...props
}) => {
  const [internalAdornment, setInternalAdornment] =
    useState<React.ReactNode | undefined>(undefined);
  const [showSecret, setShowSecret] = useState<boolean>(
    () => fieldType !== "password"
  );
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue
  });

  const handleOnClear = () => field.onChange("");

  const onToggleIcon = () => {
    setShowSecret(!showSecret);
  };

  useEffect(() => {
    if (typeof adornment === "string" && adornmentMap[adornment]) {
      setInternalAdornment(adornmentMap[adornment]);
    } else {
      setInternalAdornment(adornment);
    }
  }, []);

  return (
    <>
      {label && <InputLabel sx={labelSx}>{label}</InputLabel>}
      <InputBase
        id={id}
        name={name}
        error={fieldState.invalid}
        type={showSecret ? "text" : "password"}
        fullWidth={fullWidth}
        endAdornment={
          <InputAdornment position="end">
            {clearable && field.value && field.value.length > 0 ? (
              <IconStyled name={IconEnum.Clear} onClick={handleOnClear} />
            ) : (
              internalAdornment
            )}
            {fieldType === "password" && (
              <IconButton onClick={onToggleIcon}>
                {showSecret ? <VisibilityStyled /> : <VisibilityOffStyled />}
              </IconButton>
            )}
          </InputAdornment>
        }
        {...field}
        {...props}
      />
      {hintMessage && !fieldState.invalid && (
        <FormHelperText>{hintMessage}</FormHelperText>
      )}
      {fieldState.invalid && (
        <FormHelperText error={fieldState.invalid} id={`${id}-error`}>
          {fieldState.error?.message}
        </FormHelperText>
      )}
    </>
  );
};

export default FormTextField;
