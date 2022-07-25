import axios from "../../Api/Api"
import { ChangeEvent, FormEvent, ReactEventHandler, useEffect, useState } from "react"
import { ButtonComponent } from "../../Components/Button/ButtonComponent"
import { InformationComponent } from "../../Components/Footer/Information"
import { SubscribeNewsLetter } from "../../Components/Footer/SubscribeNewsletter"
import { FormControlComponent } from "../../Components/Form/FormControlComponent"
import { NavbarComponent } from "../../Components/Navbar/NavbarComponent"
import { NavbarTwo } from "../../Components/Navbar/NavbarTwo"
import { AxiosPromise } from "axios"

export const LoginPage = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [googleUrl, setGoogleUrl] = useState<string>("");

    useEffect( () => {
        try{
            const data: AxiosPromise = axios.get("/user/login-w-google");
            data.then(
                (data) => {
                    setGoogleUrl(data.data.url);
                    console.log(`google url = ${JSON.stringify(googleUrl)}`)
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            );
            
        }
        catch(err){
            alert("user tidak ter-autentikasi");
        }
    }, [googleUrl])

    const emailHandler: ReactEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    } 

    const passwordHandler: ReactEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const loginManualHandler: ReactEventHandler = async (event: FormEvent) => {
        try{
            await axios.post("/user/login", {
                "email" : email,
                "password" : password,
            });
            alert("Sukses login!");
        }
        catch(err){
            alert("User tidak terautentikasi!");
        }
    }


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
                                onChange={emailHandler}
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
                                onChange={passwordHandler}
                                ></FormControlComponent>
                            </div>
                        </div>
                        <a href="https://www.google.com" className="forget-password-a"><span className="forget-password-text">Forget your password?</span></a>
                        <div className="button-login">
                            <a href={googleUrl}>
                                <ButtonComponent 
                                className="login-w-google" 
                                id="login-w-google" 
                                variant=""
                                handler={(event) => {
                                    console.log("current url = " + googleUrl);
                                }}
                                >
                                    <LoginWithGoogleText></LoginWithGoogleText>
                                </ButtonComponent>
                            </a>
                            <ButtonComponent 
                            className="login-manual"
                             id="login-manual" 
                             variant=""
                             handler={loginManualHandler}
                             ><p>Sign In</p></ButtonComponent>
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
    const googleLogo = require("../../Assets/google-icon.png");
    return (
        <>
            <img src={googleLogo} alt="logo-google"></img>
            <p>Sign In With Google</p>
        </>
    )
}