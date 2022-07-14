import { Autocomplete, TextField } from "@mui/material"

export const ComboBoxComponents = ({options, label} : {
    options : any
    label: string
}) => {
    return(
        <div>
            <Autocomplete disablePortal options={options} renderInput=
            {
                (params) => {
                    return <TextField {...params} label={label}></TextField>
                }
            } 
     ></Autocomplete>
        </div>
    )
}