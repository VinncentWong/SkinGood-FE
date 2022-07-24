import { AxiosPromise } from "axios";
import { FormEvent, ReactEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Api/Api"
import { ButtonComponent } from "../Button/ButtonComponent";
import { FormControlComponent } from "../Form/FormControlComponent";

export const PopupEditPhoneNumber = (): JSX.Element => {

    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [phoneExist, setPhoneExist] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        const result: AxiosPromise = axios.get("/getphonenumber/:id", {
            headers : {
                "Authorization" : "Bearer "
            }
        });
        result.then((data) => {
            if(data.data.phoneNumber !== null || data.data.phoneNumber !== undefined){
                setPhoneExist(true);
            }
        }).catch((err) => {
            
        })
    }, []);

    const cancelButtonHandler: ReactEventHandler = (event: FormEvent<HTMLInputElement>) => {
        navigate("/account");
    }

    if(phoneExist){
        return (
            <div id = "popup-email">
            <div id = "popup-email-container">
                <label><h3>Your Old Phone Number</h3></label>
                <div id = "old-email-container">
                    <p id = "old-email-value-popup">08565062108</p>
                </div>
            </div>
            <div id = "popup-new-email-container">
                <label><h3>Your New Phone Number</h3></label>
                <div>
                    <FormControlComponent label = "" className = "" id = "new-email-input" placeHolder = "newemail@gmail.com" type="text" variant="filled" onChange={undefined as any}></FormControlComponent>
                </div>
            </div>
            <div id = "buttons-popup-edit-password">
                <ButtonComponent id="cancel-button-popup-email" className="cancel-button-popup-email" handler={cancelButtonHandler} variant="contained"><p id = "cancel-popup-email">Cancel</p></ButtonComponent>
                <ButtonComponent id="save-button-popup-email" className="save-button-popup-email" variant="contained" handler={undefined}><p id = "save-popup-email">Save</p></ButtonComponent>
            </div>
        </div>
        )
    } else {
        return(
            <div id = "container-new-phone-number">
                <label id = "label-phone-number"><h3>Add your new Phone Number</h3></label>
                <div>
                    <FormControlComponent className="" id="input-edit-phone-number" label="" placeHolder="08xxxxxxxxxx" variant="filled" type="text" onChange={undefined as any}></FormControlComponent>
                </div>
                <div id = "buttons-editphonenumber">
                    <ButtonComponent id="cancel-button-popup-email" className="" handler={cancelButtonHandler} variant="contained"><p id = "cancel-popup-email">Cancel</p></ButtonComponent>
                    <ButtonComponent id="save-button-popup-email" className="" handler={undefined} variant="contained"><p id = "save-popup-email">Confirm</p></ButtonComponent>
                </div>
            </div>
        )
    }
}