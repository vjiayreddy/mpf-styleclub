import React, { useEffect, useState } from "react";
import { Control, FieldValues, useController } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Controller } from "react-hook-form";

interface CheckBoxGroupProps {
  options: any[];
  checkBoxIcon?: React.ReactNode;
  checkBoxCheckedIcon?: React.ReactNode;
  onGetSelectedValues: (values: any) => void;
  id?: string;
  label?: string;
  labelTag?: string;
  iconLeft?: React.ReactNode;
  clearable?: boolean;
  adornment?: React.ReactNode | string;
  name: string;
  control: Control<FieldValues, object>;
  defaultValues?: any;
  rules?: any;
  fieldType?: string;
  [x: string]: any;
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
  id,
  labelSx,
  onGetSelectedValues,
  options,
  labelTagSx,
  adornment,
  clearable,
  label,
  labelTag,
  name,
  control,
  defaultValues,
  rules = {},
  ...props
}) => {
  const [checkedValues, setCheckedValues] = useState([]);

  useController({
    name,
    control,
    rules,
  });

  const handleSelect = (checkedName) => {
    const newNames = checkedValues?.includes(checkedName)
      ? checkedValues?.filter((name) => name !== checkedName)
      : [...(checkedValues ?? []), checkedName];
    setCheckedValues(newNames);
    onGetSelectedValues(newNames);
    return newNames;
  };

  useEffect(() => {
    if (defaultValues) {
      setCheckedValues(defaultValues);
    }
  }, [defaultValues]);

  return (
    <React.Fragment>
      <Box pt={3} pb={3}>
        <Grid container>
          {options.map((option, index) => (
            <Grid item xs={6} key={index}>
              <FormControlLabel
                key={index}
                label={option.name || option.colorname}
                control={
                  <Controller
                    name={name}
                    render={() => {
                      return (
                        <Checkbox
                          checked={checkedValues.includes(
                            option.name || option.colorname
                          )}
                          onChange={() =>
                            handleSelect(option.name || option.colorname)
                          }
                        />
                      );
                    }}
                    control={control}
                  />
                }
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default CheckBoxGroup;
