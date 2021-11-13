import React,{useState} from 'react';
import NavbarComponent from './navbar';
import Login from "./login";
import Signup from "./signup"

const Register = () => {
    const [isLoginApp, setIsLoginApp] = useState(true);

    const handleLoginFlag=(loginFlag)=>setIsLoginApp(loginFlag)
    return (
        <>
            <NavbarComponent handleLoginFlag={handleLoginFlag}/>
            {isLoginApp ? <Login /> : <Signup />}
        </>
    )
}

export default Register;