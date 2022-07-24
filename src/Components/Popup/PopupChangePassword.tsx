import { FormEvent, ReactEventHandler } from "react"
import { useNavigate } from "react-router-dom"
import { ButtonComponent } from "../Button/ButtonComponent"
import { FormControlComponent } from "../Form/FormControlComponent"

export const PopupChangePassword = (): JSX.Element => {

    const navigate = useNavigate();
    const changePasswordHandler: ReactEventHandler = (event: FormEvent<HTMLInputElement>) => {

    }

    const cancelButtonHandler: ReactEventHandler = (event: FormEvent<HTMLInputElement>) => {
        console.log("PING");
        navigate("/account");
    }

    return(
        <div id = "popup-email">
            <div id = "popup-email-container">
                <label><h3>Your Old Password</h3></label>
                <div id = "old-email-container">
                    <p id = "old-email-value-popup">*************</p>
                </div>
            </div>
            <div id = "popup-new-email-container">
                <label><h3>Your New Password</h3></label>
                <div>
                    <FormControlComponent label = "" className = "" id = "new-email-input" placeHolder = "newemail@gmail.com" type="text" variant="filled" onChange={changePasswordHandler}></FormControlComponent>
                </div>
            </div>
            <div id = "buttons-popup-edit-password">
                <ButtonComponent id="cancel-button-popup-email" className="cancel-button-popup-email" handler={cancelButtonHandler} variant="contained"><p id = "cancel-popup-email">Cancel</p></ButtonComponent>
                <ButtonComponent id="save-button-popup-email" className="save-button-popup-email" variant="contained" handler={undefined}><p id = "save-popup-email">Save</p></ButtonComponent>
            </div>
        </div>
    )
}