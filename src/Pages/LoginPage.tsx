import { ButtonComponent } from "../Components/Button/ButtonComponent"
import { InformationComponent } from "../Components/Footer/Information"
import { SubscribeNewsLetter } from "../Components/Footer/SubscribeNewsletter"
import { FormControlComponent } from "../Components/Form/FormControlComponent"
import { NavbarComponent } from "../Components/Navbar/NavbarComponent"
import { NavbarTwo } from "../Components/Navbar/NavbarTwo"

export const LoginPage = () => {
    return(
        <div>
            <NavbarComponent></NavbarComponent>
            <NavbarTwo></NavbarTwo>
            <div id = "page">
                <div className="box-login">
                    <div id = "content-login">
                        <h1 className="welcome-back">Welcome Back!</h1>
                        <div className="form-login">
                            <div>
                                <label htmlFor="email">Email</label>
                                <FormControlComponent
                                className="form-email" 
                                label = "" 
                                type="email"
                                variant="filled"
                                id="email"
                                placeHolder="Enter your email"
                                ></FormControlComponent>
                            </div>
                                <div>
                                <label htmlFor="password">Password</label>
                                <FormControlComponent
                                className="form-password" 
                                label = "" 
                                type="password"
                                variant="filled"
                                id="password"
                                placeHolder="Enter your password"
                                ></FormControlComponent>
                            </div>
                        </div>
                        <a href="https://www.google.com" className="forget-password-a"><span className="forget-password-text">Forget your password?</span></a>
                        <div className="button-login">
                            <ButtonComponent className="login-w-google" id="login-w-google" variant="">
                                <LoginWithGoogleText></LoginWithGoogleText>
                            </ButtonComponent>
                            <ButtonComponent className="login-manual" id="login-manual" variant=""><p>Sign In</p></ButtonComponent>
                        </div>
                    </div>
                </div>
            </div>
            <SubscribeNewsLetter></SubscribeNewsLetter>
            <InformationComponent></InformationComponent>
        </div>
    )
}

const LoginWithGoogleText = (): JSX.Element => {
    const googleLogo = require("../Assets/google-icon.png");
    return (
        <>
            <img src={googleLogo} alt="logo-google"></img>
            <p>Sign In With Google</p>
        </>
    )
}