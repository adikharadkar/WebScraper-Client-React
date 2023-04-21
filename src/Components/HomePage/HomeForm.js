import React, { useState } from 'react';

import '../../Styles/HomePage/HomeForm.css';
import Label from '../Label';
import Button from '../Button';
import InputField from '../InputField';

const HomeForm = () => {

    const [errorPosition, setErrorPosition] = useState('');
    const [errorLocation, setErrorLocation] = useState('');

    const checkSearchPositionHandler = (event) => {
        let userInput = event.target.value;
        if (userInput.length <= 0) {
            setErrorPosition('Job position is required!');
        } else {
            setErrorPosition('');
        }
        
    }

    const checkSearchLocationHandler = (event) => {
        let userInput = event.target.value;
        if (userInput.length <= 0) {
            setErrorLocation('Company location is required!');
        } else {
            setErrorLocation('');
        }
    }

    return (
        <div className='HomeForm'>
            <form>
                <ul>
                    <li><Label inputText="Job Position" /></li>
                    <li>
                    <InputField
                        type="text"
                        name="jobPosition"
                        placeholder="Enter Job Position"
                        onChange={checkSearchPositionHandler}
                    />
                    </li>
                    <li className='error'><span>{errorPosition}</span></li>
                    <li><Label inputText="Location" /></li>
                    <li>
                    <InputField
                        type="text"
                        name="companyLocation"
                        placeholder="Enter Location"
                        onChange={checkSearchLocationHandler}
                    />
                    </li>
                    <li className='error'><span>{errorLocation}</span></li>
                    
                    <li><Button value="Search Job Profiles" /></li>
                </ul>
            </form>
        </div>
    );
}

export default HomeForm;