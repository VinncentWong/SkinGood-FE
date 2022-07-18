import { Button } from "@mui/material"
import React, { ChangeEvent, FormEventHandler } from "react"

export const ButtonComponent = ({variant, children, id, className, onChange} : {
    variant : string | undefined,
    children : React.ReactNode,
    id: string,
    className: string,
    onChange: React.ReactEventHandler
}): JSX.Element => {
    return (
        <Button 
        variant = {variant || undefined as any} 
        id = {id} 
        className = {className}
        onChange={
            (event: React.FormEvent) => {
                onChange(event);
            }
        }
        >{children}</Button>
    )
}