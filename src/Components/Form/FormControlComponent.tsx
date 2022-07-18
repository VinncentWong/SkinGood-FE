import { TextField } from "@mui/material"
import { ReactEventHandler} from "react"

export const FormControlComponent = ({className, label, placeHolder, type, id, variant, onChange}: {
    className: string,
    label: string,
    placeHolder: string,
    type: string,
    variant: string,
    id: string,
    onChange: ReactEventHandler
}) : JSX.Element=> {
    return (
        <div>
            <TextField 
            id = {id}
            type = {type || "text"} 
            variant={variant as any} 
            placeholder={placeHolder} 
            label={label} 
            className={className}
            onChange={(event) => {
                onChange(event)
            }}
            ></TextField>
        </div>
    )
}