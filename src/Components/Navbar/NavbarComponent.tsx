import { Form, InputGroup } from "react-bootstrap";

const Logo = require("../../Assets/Logo-SkinGood.png");
const IconSearch = require("../../Assets/IconSearch.png");
const ShoppingCartIcon = require("../../Assets/ShoppingCart.png");
const PersonIcon = require("../../Assets/Person-Icon.png");
const BellIcon = require("../../Assets/Bell-Icon.png");

export const NavbarComponent = (): JSX.Element => {
    return (
        <div id = "navbar-1">
            <img src={Logo} alt="logo"></img>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">
                    <img src={IconSearch} alt="icon" className="icon-search"></img>
                </InputGroup.Text>
            </InputGroup>
            <img src = {BellIcon} alt="icon"></img>
            <img src = {PersonIcon} alt="icon"></img>
            <img src = {ShoppingCartIcon} alt="icon"></img>
        </div>
    );
}