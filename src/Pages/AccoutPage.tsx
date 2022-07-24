import { ReactEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileCard } from "../Components/Card/ProfileCard"
import { DropDown } from "../Components/Navbar/DropDown"

export const AccountPage = (): JSX.Element => {

    const navigate = useNavigate();

    const buttonEditEmailHandler: ReactEventHandler = (event: React.FormEvent<HTMLInputElement>) => {
        navigate("/editemail");
    }

    const buttonEditPhoneNumber: ReactEventHandler = (event: React.FormEvent) => {
        
    }

    const buttonEditPasswordHandler: ReactEventHandler = (event: React.FormEvent) => {
        navigate("/editpassword");
    }

    const buttonCancelHandler: ReactEventHandler = (event: React.FormEvent) => {

    }

    const buttonConfirmHandler: ReactEventHandler = (event: React.FormEvent) => {

    }

    return (
        <div>
            <div id = "dropdown-and-profilecard">
                <DropDown></DropDown>
                <ProfileCard 
                buttonCancelHandler={buttonCancelHandler}
                buttonConfirmHandler={buttonConfirmHandler}
                buttonEditEmailHandler={buttonEditEmailHandler}
                buttonEditPasswordHandler={buttonEditPasswordHandler}
                buttonEditPhoneNumber={buttonEditPhoneNumber}></ProfileCard>
            </div>
        </div>
    )
}