import { Box, Checkbox } from "@mui/material"
import { FormControl, FormLabel } from "react-bootstrap"
import { ButtonComponent } from "../Components/ButtonComponent"
import { ComboBoxComponents } from "../Components/ComboBoxComponents"
import { FormControlComponent } from "../Components/FormControlComponent"
import { NavbarComponent } from "../Components/Navbar/NavbarComponent"

export const RegisterPage = () => {
    return(
        <div>
            <NavbarComponent></NavbarComponent>
            <Box component="form">
                <h3>Create your account</h3>
                <p>It's free and easy</p>
                <div className = "register-box">
                    <FormControlComponent className="form-control" label="First Name*" placeHolder="Enter your first name"></FormControlComponent>
                    <FormControlComponent className="form-control" label="Last Name*" placeHolder="Enter your last name"></FormControlComponent>
                </div>
                <div className = "register-box">
                    <FormControlComponent className="form-control-email" label="Email*" placeHolder="Enter your email"></FormControlComponent>
                </div>
                <div className = "register-box">
                    <FormControlComponent className="form-control" label="Password*" placeHolder="Enter your password"></FormControlComponent>
                    <FormControlComponent className="form-control" label="Confirm Password*" placeHolder="Enter your password again"></FormControlComponent>
                </div>
                <div className = "register-box">
                    <ComboBoxComponents options={GenderBox} label="Gender*"></ComboBoxComponents>
                    <FormLabel htmlFor="form-control-date-register">Birth Date*</FormLabel>
                    <div>
                        <FormControl className="form-control-date" type="date" id = "form-control-date-register"></FormControl>
                    </div>
                </div>
                <div className = "register-box">
                    <Checkbox className = "check-box"></Checkbox>
                    <p>By checking the box, I agree that I have read and accepted the <a href = "https://www.google.com">Terms of Use</a> and <a href = "https://www.google.com">Privacy and Policy.</a></p>
                </div>
                <p>Already have account? <a href = "https://www.google.com">Sign In</a></p>
                <ButtonComponent variant="contained">Create a Account</ButtonComponent>
            </Box>
         </div>
    )
}

export const GenderBox = [
    {label : "Male"},
    {label : "Female"}
]