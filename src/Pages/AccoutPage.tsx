import { ReactEventHandler, useState } from "react";
import { ProfileCard } from "../Components/Card/ProfileCard"
import { DropDown } from "../Components/Navbar/DropDown"
import { PopupEmail } from "../Components/Popup/PopupEmail";

export const AccountPage = (): JSX.Element => {
    const [clickedEmail, setClickedEmail] = useState<boolean>(true);

    const buttonEditEmailHandler: ReactEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
        console.log("PING");
        console.log(clickedEmail);
        setClickedEmail(!clickedEmail);
    }

    const buttonEditPhoneNumber: ReactEventHandler = (event: React.FormEvent) => {

    }

    const buttonEditPasswordHandler: ReactEventHandler = (event: React.FormEvent) => {
    }

    const buttonCancelHandler: ReactEventHandler = (event: React.FormEvent) => {

    }

    const buttonConfirmHandler: ReactEventHandler = (event: React.FormEvent) => {

    }
    return (
        <div>
            {clickedEmail && <PopupEmail handler = {buttonEditEmailHandler}></PopupEmail>}
            {!clickedEmail && <div id = "dropdown-and-profilecard">
                <DropDown></DropDown>
                <ProfileCard 
                buttonCancelHandler={buttonCancelHandler}
                buttonConfirmHandler={buttonConfirmHandler}
                buttonEditEmailHandler={buttonEditEmailHandler}
                buttonEditPasswordHandler={buttonEditPasswordHandler}
                buttonEditPhoneNumber={buttonEditPhoneNumber}></ProfileCard>
            </div>}
        </div>
    )
}