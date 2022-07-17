
import { ButtonComponent } from "../Button/ButtonComponent"
import { FormControlComponent } from "../Form/FormControlComponent"

export const SubscribeNewsLetter = (): JSX.Element => {
    return(
        <div className = "subscribe-component">
            <h2 className = "subscribe-text">Subscribe Newsletter</h2>
            <FormControlComponent
            id = "input-subscribe"
            className="form-subscribe" 
            placeHolder="Enter your e-mail"
            type="text"
            variant="standard"
            label=""
            ></FormControlComponent>
            <ButtonComponent variant="contained" id = "button-subscribe" className = "button-subscribe">Subscribe</ButtonComponent>
        </div>
    )
}