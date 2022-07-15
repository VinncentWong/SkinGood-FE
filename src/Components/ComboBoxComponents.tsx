import { InputLabel, MenuItem, Select } from "@mui/material"
import FormControl from '@mui/material/FormControl';

export const ComboBoxComponents = ({label, className} : {
    label: string
    className: string
}) => {
    return(
        <FormControl className = {className}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Gender"
            >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
        </FormControl>
    )
}