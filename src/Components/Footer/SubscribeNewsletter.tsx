
import { ChangeEvent, ReactEventHandler, useState } from "react";
import { ButtonComponent } from "../Button/ButtonComponent"
import { FormControlComponent } from "../Form/FormControlComponent"

export const SubscribeNewsLetter = (): JSX.Element => {

    const [subscribeContent, setSubcribe] = useState<string>("");

    const subscribeHandler: ReactEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSubcribe(event.target.value);
    }

    const subscribeButtonHandler: ReactEventHandler = (event: React.FormEvent) => {

    }

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
            onChange={subscribeHandler}
            ></FormControlComponent>
            <ButtonComponent 
            variant="contained" 
            id = "button-subscribe" 
            className = "button-subscribe"
            handler = {subscribeButtonHandler}
            >Subscribe</ButtonComponent>
        </div>
    )
}