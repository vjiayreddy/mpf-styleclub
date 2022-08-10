import React, { useState } from "react";
import { Control, FieldValues, useController } from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Controller } from "react-hook-form";

interface CheckBoxGroupProps {
    options: any[];
    checkBoxIcon?: React.ReactNode;
    checkBoxCheckedIcon?: React.ReactNode;
    id?: string;
    label?: string;
    labelTag?: string;
    iconLeft?: React.ReactNode;
    clearable?: boolean;
    adornment?: React.ReactNode | string;
    name: string;
    control: Control<FieldValues, object>;
    defaultValue?: any;
    rules?: any;
    fieldType?: string;
    [x: string]: any;
}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({
    id,
    labelSx,
    options,
    labelTagSx,
    adornment,
    clearable,
    label,
    labelTag,
    name,
    control,
    defaultValue = "",
    rules = {},
    iconLeft,
    fieldType = "text",
    ...props
}) => {
    useController({
        name,
        control,
        rules,
        defaultValue,
    });

    return (
        <React.Fragment>
            {options.map((option, index) => (
                <FormControlLabel
                    key={index}
                    label={option.name || option.colorname}
                    onChange={(value) => {
                        console.log(value);
                    }}
                    control={
                        <Controller
                            defaultValue={defaultValue}
                            name={name}
                            render={({ field: { onChange, onBlur, ref } }) => {
                                return (
                                    <Checkbox
                                        inputRef={ref}
                                        onChange={() => {
                                            onChange(option._id);
                                        }}
                                        onBlur={onBlur}
                                    />
                                );
                            }}
                            control={control}
                        />
                    }
                />
            ))}
        </React.Fragment>
    );
};

export default CheckBoxGroup;
