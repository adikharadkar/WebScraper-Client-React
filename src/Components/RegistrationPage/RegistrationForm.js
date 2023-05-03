import React, { useState } from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';

import InputField from '../InputField';
import Label from '../Label';
import Button from '../Button';
import '../../Styles/RegistrationPage/RegistrationForm.css';

const RegistrationForm = () => {
    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword1, setErrorPassword1] = useState('');
    const [username, setUsername] = useState('');

    const checkUsernameHandler = (event) => {
        let userInput = event.target.value;
        if (userInput.length <= 0) {
            setErrorUsername('Please enter a username');
        } else {
            setErrorUsername('');
        }
    }

    const postDataHandler = (event) => {
        console.log(username)
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

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
        <div className='RegistrationForm'>
            <form>
                <ul>
                    <li><Label inputText="Username" /></li>
                    <li>
                    <InputField
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        onChange={(e) => {
                            checkUsernameHandler(e)
                            handleUsernameChange(e)
                        }}
                        value={username}
                    />
                    </li>
                    <li className='error'><span>{errorUsername}</span></li>
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
                        onChange={(e) => {
                            checkPasswordHandler1(e)
                            
                        }}
                    />
                    </li>
                    <li className='error'><span>{errorPassword1}</span></li>
                    
                    <li><Button value="Create Account" onClick={postDataHandler} /></li>
                    <li className="loginLink"><p>Already have an account ? <Link to='/login'>Log In</Link></p></li>
                </ul>
            </form>
        </div>
    )
}

export default RegistrationForm;