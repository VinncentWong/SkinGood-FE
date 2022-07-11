import { TextField } from "@mui/material"

export const FormControlComponent = ({className, label, placeHolder}: {
    className: string,
    label: string,
    placeHolder: string
}) : JSX.Element=> {
    return (
        <div>
            <TextField variant="filled" placeholder={placeHolder} label={label} className={className}></TextField>
        </div>
    )
}