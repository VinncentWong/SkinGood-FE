import { Button } from "@mui/material"
import React from "react"

export const ButtonComponent = ({variant, children, id, className, handler} : {
    variant : string | undefined,
    children : React.ReactNode,
    id: string,
    className: string,
    handler: React.ReactEventHandler | undefined
}): JSX.Element => {
    return (
        <Button 
        variant = {variant || undefined as any} 
        id = {id} 
        className = {className}
        onClick = {
            (event: React.FormEvent) => {
                if(handler !== undefined){
                    handler(event);
                }
            }
        }
        >{children}</Button>
    )
}