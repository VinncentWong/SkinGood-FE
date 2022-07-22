import React, { ReactEventHandler } from "react"
import { ButtonComponent } from "../Button/ButtonComponent"

const logo = require("../../Assets/Panah.png");
// const cameraLogo = require("../../Assets/Vector.png");

export const ProfileCard = (): JSX.Element => {

    const buttonEditEmailHandler: ReactEventHandler = (event: React.FormEvent) => {

    }

    const buttonEditPhoneNumber: ReactEventHandler = (event: React.FormEvent) => {

    }

    const buttonEditPassword: ReactEventHandler = (event: React.FormEvent) => {

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
                    <ButtonComponent className="" id="button-edit-email" variant="contained" handler={buttonEditEmailHandler}>
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
                    <div id = "gender-value">
                        <p>Male</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p>Birth Date</p>
                    <p>22/07/2022</p>
                </div>
                <div>
                    <p>Change Password</p>
                    <div>
                        <ButtonComponent className="" id="button-edit-password" variant="contained" handler={buttonEditPassword}>
                            <p>Atur Sekarang</p>
                            <img src = {logo} alt = "arrow"></img>
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}