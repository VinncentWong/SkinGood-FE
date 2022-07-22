const image30 = require("../../Assets/Logo-SkinGood.png")

export const DropDown = (): JSX.Element => {
    return(
        <div id = "container-dropdown">
            <div id = "user-dropdown">
                <div id = "dropdown-content-container">
                    <div id = "profile">
                        <img alt = "profile" src = {image30}></img>
                    </div>
                    <div id = "name-editlink">
                        <p>BCC Soto Sate</p>
                        <a href = "https://www.google.com" id = "edit-profile-a">Edit Profile</a>
                    </div>
                </div>
                <div id = "dropdown-links">
                    <a href = "https://www.google.com"><p className="a-dropdown">My Address</p></a>
                    <a href = "https://www.google.com"><p className="a-dropdown">My Orders</p></a>
                    <a href = "https://www.google.com"><p className="a-dropdown">My Favorite</p></a>
                    <a href = "https://www.google.com"><p className="a-dropdown">My SkinGood Points</p></a>
                </div>
            </div>
        </div>
    )
}