import { Box } from "@mui/material"
import { FormControl, FormLabel } from "react-bootstrap"
import { ComboBoxComponents } from "../Components/ComboBoxComponents"
import { DateInputComponent } from "../Components/DateInputComponents"
import { FormControlComponent } from "../Components/FormControlComponent"

export const RegisterPage = () => {
    return(
        <Box component="form">
            <h3>Create your account</h3>
            <p>It's free and easy</p>
            <div>
                <FormControlComponent className="form-control" label="First Name*" placeHolder="Enter your first name"></FormControlComponent>
                <FormControlComponent className="form-control" label="Last Name*" placeHolder="Enter your last name"></FormControlComponent>
            </div>
            <div>
                <FormControlComponent className="form-control" label="Email*" placeHolder="Enter your email"></FormControlComponent>
            </div>
            <div>
                <FormControlComponent className="form-control" label="Password*" placeHolder="Enter your password"></FormControlComponent>
                <FormControlComponent className="form-control" label="Confirm Password*" placeHolder="Enter your password again"></FormControlComponent>
            </div>
            <div>
                <ComboBoxComponents options={GenderBox} label="Gender*"></ComboBoxComponents>
            </div>
            <FormLabel htmlFor="form-control-date-register">Birth Date*</FormLabel>
            <div>
                <FormControl className="form-control-date" type="date" id = "form-control-date-register"></FormControl>
            </div>
            {/* <checkbox>*/}
            <p>By checking the box, I agree that I have read and accepted the <span>Terms of Use</span> and <span>Privacy and Policy.</span></p>
         </Box>
    )
}

export const GenderBox = [
    {label : "Male"},
    {label : "Female"}
]