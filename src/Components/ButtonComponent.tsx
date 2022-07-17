import { Button } from "@mui/material"

export const ButtonComponent = ({variant, children, id, className} : {
    variant : string | undefined,
    children : React.ReactNode,
    id: string,
    className: string,
}): JSX.Element => {
    return (
        <Button variant = {variant || undefined as any} id = {id} className = {className}>{children}</Button>
    )
}