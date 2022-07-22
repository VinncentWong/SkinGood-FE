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
                    <a href = "https://www.google.com"><h3>My Address</h3></a>
                    <a href = "https://www.google.com"><h3>My Orders</h3></a>
                    <a href = "https://www.google.com"><h3>My Favorite</h3></a>
                    <a href = "https://www.google.com"><h3>My SkinGood Points</h3></a>
                </div>
            </div>
        </div>
    )
}