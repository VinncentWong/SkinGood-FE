import { TextField } from "@mui/material"

export const FormControlComponent = ({className, label, placeHolder, type}: {
    className: string,
    label: string,
    placeHolder: string,
    type: string,
}) : JSX.Element=> {
    return (
        <div>
            <TextField type = {type || "text"} variant="filled" placeholder={placeHolder} label={label} className={className}></TextField>
        </div>
    )
}