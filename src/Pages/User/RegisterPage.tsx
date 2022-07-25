import { Box, Checkbox, FormLabel, SelectChangeEvent } from "@mui/material"
import { ButtonComponent } from "../../Components/Button/ButtonComponent"
import { ComboBoxComponents } from "../../Components/Form/ComboBoxComponents"
import { FormControlComponent } from "../../Components/Form/FormControlComponent"
import { NavbarComponent } from "../../Components/Navbar/NavbarComponent"
import { NavbarTwo } from "../../Components/Navbar/NavbarTwo"
import { SubscribeNewsLetter } from "../../Components/Footer/SubscribeNewsletter"
import { InformationComponent } from "../../Components/Footer/Information"
import { ChangeEvent, ReactEventHandler, useState } from "react"
import axios from "../../Api/Api"

export const RegisterPage = () => {
    const [email, setEmail] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [date, setDate] = useState<string>("");

    const emailHandler: ReactEventHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmail(event.target.value);
    }

    const firstNameHandler: ReactEventHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFirstName(event.target.value);
    }

    const lastNameHandler: ReactEventHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLastName(event.target.value);
    }

    const passwordHandler: ReactEventHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPassword(event.target.value);
    }

    const confirmPasswordHandler: ReactEventHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setConfirmPassword(event.target.value);
    }

    const genderHandler = (event: SelectChangeEvent) => {
        setGender(event.target.value);
        console.log("gender = " + event.target.value);
    }

    const dateHandler: ReactEventHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDate(event.target.value);
    }

    const submitHandler: ReactEventHandler = async (event: React.FormEvent) => {
        console.log("Masuk ke submit handler");
        if(password !== confirmPassword){
            alert("Password and confirm password doesn't match!");
            return;
        }
        try{
            await axios.post("/user/registration", {
                "email" : email,
                "firstname" : firstName,
                "lastname" : lastName,
                "password" : password,
                "gender" : gender,
                "birth" : date,
            });
            alert("Sukses menyimpan data user!");
        } catch(err){
            alert("Terjadi error ketika menyimpan data user");
        }
    }
        return(
            <>
                <NavbarComponent></NavbarComponent>
                <NavbarTwo></NavbarTwo>
                <div id = "page">
                    <div className="content-register-box">
                        <Box component="form" className = "box-register">
                                <h3 id = "create-account-text">Create your account</h3>
                                <p id = "free-easy-text">It's free and easy</p>
                                <div className = "register-box" id = "input-1">
                                    <FormControlComponent 
                                    variant = "filled" 
                                    id = "input-firstname" 
                                    type = "text" 
                                    className="form-control" 
                                    label="First Name*" 
                                    placeHolder="Enter your first name"
                                    onChange={firstNameHandler}
                                    ></FormControlComponent>
                                    <FormControlComponent 
                                    variant = "filled" 
                                    id = "input-lastname"
                                    type = "text" 
                                    className="form-control" 
                                    label="Last Name*" 
                                    placeHolder="Enter your last name"
                                    onChange={lastNameHandler}
                                    ></FormControlComponent>
                                </div>
                                <div className = "register-box" id = "input-2">
                                    <FormControlComponent 
                                    variant = "filled" 
                                    id = "input-email" 
                                    type = "email" 
                                    className="form-control-email" 
                                    label="Email*" 
                                    placeHolder="Enter your email"
                                    onChange={emailHandler}
                                    ></FormControlComponent>
                                </div>
                                <div className = "register-box" id = "input-3">
                                    <FormControlComponent 
                                    variant = "filled" 
                                    id = "input-password" 
                                    type = "password" 
                                    className="form-control" 
                                    label="Password*" 
                                    placeHolder="Enter your password"
                                    onChange={passwordHandler}
                                    ></FormControlComponent>
                                    <FormControlComponent 
                                    variant = "filled" 
                                    id = "input-confirm-password" 
                                    type = "password" 
                                    className="form-control" 
                                    label="Confirm Password*" 
                                    placeHolder="Enter your password again"
                                    onChange={confirmPasswordHandler}
                                    ></FormControlComponent>
                                </div>
                                <div className = "register-box" id = "input-4">
                                    <ComboBoxComponents 
                                    label="Gender*" 
                                    className = "form-gender"
                                    onChange={genderHandler as ReactEventHandler}
                                    ></ComboBoxComponents>
                                    <FormLabel htmlFor="date-input" id = "date-label">Birth date*</FormLabel>
                                    <div></div>
                                    <FormControlComponent 
                                    variant = "filled" 
                                    id = "date-input" 
                                    type = "date" 
                                    className="form-date" 
                                    placeHolder="DD/MM/YYYY" 
                                    label=""
                                    onChange={dateHandler}
                                    ></FormControlComponent>
                                </div>
                                <div className = "register-box" id = "input-5">
                                    <Checkbox className = "check-box"></Checkbox>
                                    <p>By checking the box, I agree that I have read and accepted the <a href = "https://www.google.com">Terms of Use</a> and <a href = "https://www.google.com">Privacy and Policy.</a></p>
                                </div>
                                <div className = "register-box" id = "input-6">
                                    <p>Already have account? <a href = "/login">Sign In</a></p>
                                    <ButtonComponent 
                                    variant="contained" 
                                    className = "button-create-account" 
                                    id = "button-create-account"
                                    handler={submitHandler}
                                    >Create Account</ButtonComponent>
                                </div>
                        </Box>             
                    </div>
                </div>
                <SubscribeNewsLetter></SubscribeNewsLetter>
                <InformationComponent></InformationComponent>
            </>
        )
}