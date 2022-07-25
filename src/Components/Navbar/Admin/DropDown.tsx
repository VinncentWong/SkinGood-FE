import { Avatar } from "@mui/material"

export const DropDown = (): JSX.Element => {
    return(
        <div id = "container-dropdown">
            <div id = "user-dropdown">
                <div id = "dropdown-content-container">
                    <div id = "profile">
                       {checkPhoto()}
                    </div>
                    <div id = "name-editlink">
                        <p>BCC Soto Sate</p>
                        <a href = "/account" id = "edit-profile-a">Edit Profile</a>
                    </div>
                </div>
                <div id = "dropdown-links">
                    <a href = "/myaddress"><p className="a-dropdown">My Sales</p></a>
                    <a href = "https://www.google.com"><p className="a-dropdown">My Catalogue</p></a>
                    <a href = "https://www.google.com"><p className="a-dropdown">My Balance</p></a>
                    <a href = "https://www.google.com"><p className="a-dropdown">My Earnings</p></a>
                    <a href = "https://www.google.com"><p className="a-dropdown">My Send Services</p></a>
                    <a href = "https://www.google.com"><p className="a-dropdown">My Performance</p></a>
                    <a href = "https://www.google.com"><p className="a-dropdown">My Bank Account</p></a>
                </div>
            </div>
        </div>
    )
}

const checkPhoto = (): JSX.Element => {
    return (
        <Avatar src = "logo-30.png"></Avatar>
    )
}