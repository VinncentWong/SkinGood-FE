import { InputAdornment, TextField } from "@mui/material";

const Logo = require("../../Assets/Logo-SkinGood.png");
const IconSearch = require("../../Assets/IconSearch.png");
const ShoppingCartIcon = require("../../Assets/ShoppingCart.png");
const PersonIcon = require("../../Assets/Person-Icon.png");
const BellIcon = require("../../Assets/Bell-Icon.png");

export const NavbarComponent = (): JSX.Element => {
    return (
        <div id = "navbar-1">
            <img src={Logo} alt="logo" id = "logo-skingood"></img>
            <div id = "input-search-icon">
                <TextField 
                variant={"standard"} 
                placeholder = "Discover the Solution with SkinGood"
                InputProps={{
                    endAdornment : 
                    <InputAdornment position="end">
                        <img src={IconSearch} alt="icon" className = "icon-search"></img>
                    </InputAdornment>
                }}
                id="input-search"
                >
                </TextField>
            </div>
            <a href="https://www.google.com" id = "bell-icon-a">
                <img src = {BellIcon} alt="icon"></img>
            </a>
            <a href="https://www.google.com" id = "person-icon-a">
                <img src = {PersonIcon} alt="icon"></img>
            </a>
            <a href="https://www.google.com" id = "cart-icon-a">
                <img src = {ShoppingCartIcon} alt="icon"></img>
            </a>
        </div>
    );
}