import { Button } from "@mui/material"

export const ButtonComponent = ({variant, children} : {
    variant : string | undefined,
    children : React.ReactNode
}): JSX.Element => {
    return (
        <Button variant = {variant || undefined as any}>{children}</Button>
    )
}