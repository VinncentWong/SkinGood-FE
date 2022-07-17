import { ButtonComponent } from "./ButtonComponent"
import { FormControlComponent } from "./FormControlComponent"

export const SubscribeNewsLetter = (): JSX.Element => {
    return(
        <div className = "subscribe-component">
            <h2>Subscribe Newsletter</h2>
            <FormControlComponent
            id = "input-subscribe"
            className="form-subscribe" 
            placeHolder="Enter your e-mail"
            type="text"
            variant="filled"
            label=""
            ></FormControlComponent>
            <ButtonComponent variant="contained" id = "" className = "button-subscribe">Subscribe</ButtonComponent>
        </div>
    )
}