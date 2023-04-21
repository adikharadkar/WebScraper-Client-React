import React, {useState} from "react";
import validator from 'validator';

import '../../Styles/LoginPage/LoginForm.css'
import Button from "../Button";
import InputField from "../InputField";
import Label from "../Label";

const LoginForm = () => {
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword1, setErrorPassword1] = useState('');

    const checkEmailHandler = (event) => {
        let userInput = event.target.value;
        if (userInput.length <= 0) {
            setErrorEmail('Email ID is required!');
        } else {
            if (!validator.isEmail(userInput)) {
                setErrorEmail('Please enter a valid email ID');
            } else {
                setErrorEmail('');
            }
        }
        
    }

    const checkPasswordHandler1 = (event) => {
        let userInput = event.target.value;
        if (userInput.length <= 0) {
            setErrorPassword1('Password is required!');
        } else {
            if (userInput.length < 8) {
                setErrorPassword1('Password must contain at least 8 characters!');
            } else {
                setErrorPassword1('');
            }
        }
    }

    return (
        <div className='LoginForm'>
            <form>
                <ul>
                    <li><Label inputText="Email ID" /></li>
                    <li>
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Enter Email ID"
                        onChange={checkEmailHandler}
                    />
                    </li>
                    <li className='error'><span>{errorEmail}</span></li>
                    <li><Label inputText="Password" /></li>
                    <li>
                    <InputField
                        type="password"
                        name="password1"
                        placeholder="Enter Password"
                        onChange={checkPasswordHandler1}
                    />
                    </li>
                    <li className='error'><span>{errorPassword1}</span></li>
                    <li className="forgotPassword"><p>Forgot Password ?</p></li>
                    
                    <li><Button value="Log In" /></li>
                    <li className="signupLink"><p>Don't have an account ? Sign Up</p></li>
                </ul>
            </form>
        </div>
    )
}

export default LoginForm;