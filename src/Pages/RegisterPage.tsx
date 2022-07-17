import { Box, Checkbox, FormLabel } from "@mui/material"
import { ButtonComponent } from "../Components/ButtonComponent"
import { ComboBoxComponents } from "../Components/ComboBoxComponents"
import { FormControlComponent } from "../Components/FormControlComponent"
import { NavbarComponent } from "../Components/Navbar/NavbarComponent"
import { NavbarTwo } from "../Components/Navbar/NavbarTwo"

export const RegisterPage = () => {
    return(
        <>
            <NavbarComponent></NavbarComponent>
            <NavbarTwo></NavbarTwo>
            <div id = "register-page">
                <div className="content-register-box">
                    <Box component="form" className = "box-register">
                        <h3>Create your account</h3>
                        <p>It's free and easy</p>
                        <div className = "register-box">
                            <FormControlComponent variant = "filled" id = "input-firstname" type = "text" className="form-control" label="First Name*" placeHolder="Enter your first name"></FormControlComponent>
                            <FormControlComponent variant = "filled" id = "input-lastname"type = "text" className="form-control" label="Last Name*" placeHolder="Enter your last name"></FormControlComponent>
                        </div>
                        <div className = "register-box">
                            <FormControlComponent variant = "filled" id = "input-email" type = "email" className="form-control-email" label="Email*" placeHolder="Enter your email"></FormControlComponent>
                        </div>
                        <div className = "register-box">
                            <FormControlComponent variant = "filled" id = "input-password" type = "password" className="form-control" label="Password*" placeHolder="Enter your password"></FormControlComponent>
                            <FormControlComponent variant = "filled" id = "input-confirm-password" type = "password" className="form-control" label="Confirm Password*" placeHolder="Enter your password again"></FormControlComponent>
                        </div>
                        <div className = "register-box">
                            <ComboBoxComponents label="Gender*" className = "form-gender"></ComboBoxComponents>
                            <FormLabel htmlFor="date-input" id = "date-label">Birth date*</FormLabel>
                            <div></div>
                            <FormControlComponent variant = "filled" id = "date-input" type = "date" className="form-date" placeHolder="DD/MM/YYYY" label=""></FormControlComponent>
                        </div>
                        <div className = "register-box">
                            <Checkbox className = "check-box"></Checkbox>
                            <p>By checking the box, I agree that I have read and accepted the <a href = "https://www.google.com">Terms of Use</a> and <a href = "https://www.google.com">Privacy and Policy.</a></p>
                        </div>
                        <div className = "register-box">
                            <p>Already have account? <a href = "https://www.google.com">Sign In</a></p>
                            <ButtonComponent variant="contained">Create Account</ButtonComponent>
                        </div>
                    </Box>             
                </div>
            </div>
         </>
    )
}