import React, { useState } from 'react';

import InputField from '../InputField';
import Label from '../Label';
import Button from '../Button';
import '../../Styles/RegistrationPage/RegistrationForm.css';

const RegistrationForm = () => {
    const [errorUsername, setErrorUsername] = useState('');
    const checkUsernameHandler = (event) => {
        let userInput = event.target.value;
        if (userInput.length <= 0) {
            setErrorUsername('Please enter a username');
        } else {
            setErrorUsername('');
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
                        onChange={checkUsernameHandler}
                    />
                    </li>
                    <li className='error'><span>{errorUsername}</span></li>
                    <li><Label inputText="Email ID" /></li>
                    <li>
                    <InputField
                        type="email"
                        name="email"
                        placeholder="Enter Email ID"
                    />
                    </li>
                    <li className='error'><span>{errorUsername}</span></li>
                    <li><Label inputText="Password" /></li>
                    <li>
                    <InputField
                        type="password"
                        name="password1"
                        placeholder="Enter Password"
                    />
                    </li>
                    <li className='error'><span>{errorUsername}</span></li>
                    <li><Label inputText="Confirm Password" /></li>
                    <li>
                    <InputField
                        type="password"
                        name="password1"
                        placeholder="Re-enter Password"
                    />
                    </li>
                    <li className='error'><span>{errorUsername}</span></li>
                    <li><Button value="Create Account" /></li>
                </ul>
            </form>
        </div>
    )
}

export default RegistrationForm;