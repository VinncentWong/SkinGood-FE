import { ChangeEvent, ReactEventHandler, useState } from "react"
import { ButtonComponent } from "../Button/ButtonComponent";
import { FormControlComponent } from "../Form/FormControlComponent"

export const PopupEmail = ({handler} : {
    handler: ReactEventHandler
}): JSX.Element => {

    const [newEmail, setNewEmail] = useState<string>("");

    const newEmailHandler: ReactEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewEmail(event.target.value);
    }

    return (
        <div id = "popup-email">
            <div id = "popup-email-container">
                <label><h3>Your Old Email</h3></label>
                <div id = "old-email-container">
                    <p id = "old-email-value-popup">bcc@gmail.com</p>
                </div>
            </div>
            <div id = "popup-new-email-container">
                <label><h3>Your New Email</h3></label>
                <div>
                    <FormControlComponent label = "" className = "" id = "new-email-input" placeHolder = "newemail@gmail.com" type="text" variant="filled" onChange={newEmailHandler}></FormControlComponent>
                </div>
            </div>
            <div id = "buttons-popup-edit-password">
                <ButtonComponent className="" id="cancel-button-popup-email" handler={handler} variant="contained"><p id = "cancel-popup-email">Cancel</p></ButtonComponent>
                <ButtonComponent className="" id="save-button-popup-email" variant="contained" handler={handler}><p id = "save-popup-email">Save</p></ButtonComponent>
            </div>
        </div>
    )
}