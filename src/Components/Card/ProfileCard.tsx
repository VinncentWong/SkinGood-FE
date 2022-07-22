import React, { ReactEventHandler } from "react"
import { ButtonComponent } from "../Button/ButtonComponent"

export const ProfileCard = (): JSX.Element => {

    const buttonEditEmailHandler: ReactEventHandler = (event: React.FormEvent) => {

    }

    const buttonEditPhoneNumber: ReactEventHandler = (event: React.FormEvent) => {

    }

    const buttonEditPassword: ReactEventHandler = (event: React.FormEvent) => {

    }
    return(
        <div>
            <img alt="profile"></img>
            <div>
                <div>
                    <p>First Name</p>
                    <div>
                        BCC Soto
                    </div>
                </div>
                <div>
                    <p>Last Name</p>
                    <div>
                        Sate
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <label>Email</label>
                    <ButtonComponent className="" id="button-edit-email" variant="contained" handler={buttonEditEmailHandler}>
                        <p>bccsotosate@gmail.com</p>
                    </ButtonComponent>
                </div>
                <div>
                    <label>Phone Number</label>
                    <ButtonComponent className="" id="button-edit-phonenumber" variant="contained" handler={buttonEditPhoneNumber}>
                        <p>Atur Sekarang</p>
                    </ButtonComponent>
                </div>
            </div>
            <div>
                <div>
                    <p>Membership ID</p>
                    <div>
                        0888812312303881
                    </div>
                </div>
                <div>
                    <p>Gender</p>
                    <p>Male</p>
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
                        </ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}