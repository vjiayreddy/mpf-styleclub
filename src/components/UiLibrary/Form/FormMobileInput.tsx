import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller, Control, FieldValues } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";


interface FormMobileInputProps {
  name: string;
  control: Control<FieldValues, object>;
  rules?: any;
  error?: string;
  country?: string;
  label?: string;
}

const FormMobileInput: React.FC<FormMobileInputProps> = ({
  name,
  control,
  rules,
  error,
  country,
  label
}) => {
  return (
    <div className="phone-input">
      {label && <InputLabel>{label}</InputLabel>}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            enableSearch={true}
            disableSearchIcon={true}
            country={country ? country : "in"}
            value={value}
            onChange={onChange}
          />
        )}
      />
      {error && <p className="error-message">Invalid Phone</p>}
    </div>
  );
};

export default FormMobileInput;
