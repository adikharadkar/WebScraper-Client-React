import React, { useState } from 'react';
import axios from 'axios';

import '../../Styles/HomePage/HomeForm.css';
import Label from '../Label';
import Button from '../Button';
import InputField from '../InputField';

const HomeForm = () => {

    const [errorPosition, setErrorPosition] = useState('');
    const [errorLocation, setErrorLocation] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [jobLocation, setJobLocation] = useState('');

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

    const handlePositionChange = (e) => {
        setJobPosition(e.target.value);
    }

    const handleLocationChange = (e) => {
        setJobLocation(e.target.value);
    }

    const postDataHandler = (e) => {
        e.preventDefault();

        const postData = {
            jobPosition,
            jobLocation
        }

        if (errorLocation === '' && errorPosition === '') {
            axios.post(`https://jsonplaceholder.typicode.com/posts`, postData)
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div className='HomeForm'>
            <form onSubmit={postDataHandler}>
                <ul>
                    <li><Label inputText="Job Position" /></li>
                    <li>
                    <InputField
                        type="text"
                        name="jobPosition"
                        placeholder="Enter Job Position"
                        onChange={(e) => {
                            checkSearchPositionHandler(e)
                            handlePositionChange(e)
                        }}
                        value={jobPosition}
                    />
                    </li>
                    <li className='error'><span>{errorPosition}</span></li>
                    <li><Label inputText="Location" /></li>
                    <li>
                    <InputField
                        type="text"
                        name="companyLocation"
                        placeholder="Enter Location"
                        onChange={(e) => {
                            checkSearchLocationHandler(e)
                            handleLocationChange(e)
                        }}
                        value={jobLocation}
                    />
                    </li>
                    <li className='error'><span>{errorLocation}</span></li>
                    
                    <li><Button value="Search Job Profiles" type="submit" /></li>
                </ul>
            </form>
        </div>
    );
}

export default HomeForm;