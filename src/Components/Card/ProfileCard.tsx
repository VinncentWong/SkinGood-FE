import React, { FormEvent, ReactEventHandler } from "react"
import { ButtonComponent } from "../Button/ButtonComponent"

const logo = require("../../Assets/Panah.png");
// const cameraLogo = require("../../Assets/Vector.png");

export const ProfileCard = ({buttonEditEmailHandler, buttonEditPasswordHandler, buttonEditPhoneNumber, buttonCancelHandler, buttonConfirmHandler}: {
    buttonEditEmailHandler: ReactEventHandler,
    buttonEditPasswordHandler: ReactEventHandler,
    buttonEditPhoneNumber: ReactEventHandler,
    buttonCancelHandler: ReactEventHandler,
    buttonConfirmHandler: ReactEventHandler,
}): JSX.Element => {

    const buttonEmailHandler: ReactEventHandler = (event: FormEvent<HTMLInputElement>) => {
        buttonEditEmailHandler(event);
    }

    return(
        <div id = "profile-card">
            <img alt="profile" id = "profile-picture"></img>
            {/* <img alt="camera" id = "camera"></img> */}
            <div id = "profile-1">
                <div id = "div-first-name">
                    <p><h3>First Name</h3></p>
                    <div id = "first-name-value">
                        <p>BCC Soto</p>
                    </div>
                </div>
                <div id = "div-last-name">
                    <p><h3>Last Name</h3></p>
                    <div id = "last-name-value">
                        <p>Sate</p>
                    </div>
                </div>
            </div>
            <div id = "profile-2">
                <div id = "div-email">
                    <label id = "label-email-profile"><h3>Email</h3></label>
                    <ButtonComponent className="" id="button-edit-email" variant="contained" handler={buttonEmailHandler}>
                        <p id = "email-value">bccsotosate@gmail.com</p>
                        <img src = {logo} alt = "arrow" id = "arrow-1"></img>
                    </ButtonComponent>
                </div>
                <div id = "div-phone">
                    <label id = "label-email-phonenumber"><h3>Phone Number</h3></label>
                    <ButtonComponent className="" id="button-edit-phonenumber" variant="contained" handler={buttonEditPhoneNumber}>
                        <p id = "phone-number-value">Atur Sekarang</p>
                        <img src = {logo} alt = "arrow" id = "arrow-2"></img>
                    </ButtonComponent>
                </div>
            </div>
            <div id = "profile-3">
                <div id = "div-membership">
                    <h3>Membership ID</h3>
                    <div id = "membership-container-value">
                        <p id = "membership-value">0888812312303881</p>
                    </div>
                </div>
                <div id = "div-gender">
                    <h3>Gender</h3>
                    <div id = "gender-container-value">
                        <p id = "gender-value">Male</p>
                    </div>
                </div>
            </div>
            <div id = "profile-4">
                <div id = "div-birth-date">
                    <h3>Birth Date</h3>
                    <div id = "birth-date-container-value">
                        <p id = "birth-date-value">22/07/2022</p>
                    </div>
                </div>
                <div id = "div-edit-password">
                    <label htmlFor="button-edit-password"><h3>Change password</h3></label>
                    <div id = "edit-password-container-value">
                        <ButtonComponent className="" id="button-edit-password" variant="contained" handler={buttonEditPasswordHandler}>
                            <p id = "value-password">***************</p>
                            <img src = {logo} alt = "arrow" id = "arrow-3"></img>
                        </ButtonComponent>
                    </div>
                </div>
            </div>
            <div id = "buttons-profile">
                <ButtonComponent className="" id="button-cancel-profile" handler={buttonCancelHandler} variant="contained"><p id = "cancel-text">Cancel</p></ButtonComponent>
                <ButtonComponent className="" id="button-save-profile" handler={buttonConfirmHandler} variant="contained"><p id = "save-text">Save</p></ButtonComponent>
            </div>
        </div>
    )
}