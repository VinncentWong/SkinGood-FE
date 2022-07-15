import { Box, Checkbox } from "@mui/material"
import { ButtonComponent } from "../Components/ButtonComponent"
import { ComboBoxComponents } from "../Components/ComboBoxComponents"
import { FormControlComponent } from "../Components/FormControlComponent"
import { NavbarComponent } from "../Components/Navbar/NavbarComponent"

export const RegisterPage = () => {
    return(
        <div>
            <NavbarComponent></NavbarComponent>
            <Box component="form" className = "box-register">
                <h3>Create your account</h3>
                <p>It's free and easy</p>
                <div className = "register-box">
                    <FormControlComponent type = "text" className="form-control" label="First Name*" placeHolder="Enter your first name"></FormControlComponent>
                    <FormControlComponent type = "text" className="form-control" label="Last Name*" placeHolder="Enter your last name"></FormControlComponent>
                </div>
                <div className = "register-box">
                    <FormControlComponent type = "email" className="form-control-email" label="Email*" placeHolder="Enter your email"></FormControlComponent>
                </div>
                <div className = "register-box">
                    <FormControlComponent type = "password" className="form-control" label="Password*" placeHolder="Enter your password"></FormControlComponent>
                    <FormControlComponent type = "password" className="form-control" label="Confirm Password*" placeHolder="Enter your password again"></FormControlComponent>
                </div>
                <div className = "register-box">
                    <ComboBoxComponents label="Gender*" className = "form-gender"></ComboBoxComponents>
                    <FormControlComponent type = "date" className="form-control" placeHolder="DD/MM/YYYY" label=""></FormControlComponent>
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