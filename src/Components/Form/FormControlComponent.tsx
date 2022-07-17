import { TextField } from "@mui/material"

export const FormControlComponent = ({className, label, placeHolder, type, id, variant}: {
    className: string,
    label: string,
    placeHolder: string,
    type: string,
    variant: string,
    id: string,
}) : JSX.Element=> {
    return (
        <div>
            <TextField id = {id}type = {type || "text"} variant={variant as any} placeholder={placeHolder} label={label} className={className}></TextField>
        </div>
    )
}