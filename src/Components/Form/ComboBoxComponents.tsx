import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import FormControl from '@mui/material/FormControl';
import React, { ReactEventHandler } from "react";

export const ComboBoxComponents = ({label, className, onChange} : {
    label: string,
    className: string,
    onChange: ReactEventHandler
}) => {
    return(
        <FormControl className = {className}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            onChange={
                (event: SelectChangeEvent, child: React.ReactNode) => {
                    onChange(event as any);
                }
            }
            >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
        </FormControl>
    )
}