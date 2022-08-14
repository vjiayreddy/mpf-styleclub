import React, { Fragment, useState } from "react";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import { Control, FieldValues, useController } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";

interface FormTextFieldProps {
  id: string;
  label: string;
  labelTag?: string;
  iconLeft?: React.ReactNode;
  clearable?: boolean;
  hintMessage?: string;
  adornment?: React.ReactNode | string;
  name: string;
  control: Control<FieldValues, object>;
  defaultValue?: any;
  rules?: any;
  fieldType?: string;
  [x: string]: any;
}

const FormTextField: React.FC<FormTextFieldProps> = ({
  id,
  labelSx,
  labelTagSx,
  adornment,
  clearable,
  label,
  labelTag,
  name,
  hintMessage,
  control,
  defaultValue = "",
  rules = {},
  iconLeft,
  fieldType = "text",
  ...props
}) => {
  const [showSecret, setShowSecret] = useState<boolean>(
    () => fieldType !== "password"
  );
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const handleOnClear = () => field.onChange("");
  const handleToggleIcon = () => {};

  return (
    <React.Fragment>
      {label && (
        <InputLabel
          sx={labelSx}
          htmlFor={label}
          color="primary"
          variant="standard"
        >
          {label}
        </InputLabel>
      )}

      <InputBase
        id={label}
        fullWidth={true}
        //hiddenLabel={true}
        error={fieldState.invalid}
        data-testid={label}
        type={showSecret ? "text" : "password"}
        startAdornment={
          <InputAdornment position="start">
            {iconLeft && <Fragment>{iconLeft}</Fragment>}
          </InputAdornment>
        }
        // endAdornment={
        //   <InputAdornment position="end">
        //     {clearable && field.value && field.value.length > 0 ? (
        //       <IconStyled
        //         name={IconEnum.Clear}
        //         data-testid={"inputAdornment"}
        //         onClick={handleOnClear}
        //       />
        //     ) : (
        //       internalAdorment
        //     )}
        //     {fieldType === "password" && (
        //       <IconButton onClick={onToggleIcon}>
        //         {showSecret ? <VisiblityOffStyled /> : <VisiblityStyled />}
        //       </IconButton>
        //     )}
        //   </InputAdornment>
        // }
        // {...field}
        // {...props}
      />
      {hintMessage && <FormHelperText>{hintMessage}</FormHelperText>}
      {fieldState.invalid && <p id={`${id}-message`}>Error</p>}
    </React.Fragment>
  );
};

export default FormTextField;
