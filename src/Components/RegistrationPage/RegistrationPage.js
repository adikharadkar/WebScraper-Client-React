import React from 'react';

import '../../Styles/RegistrationPage/RegistrationPage.css';
import RegistrationForm from './RegistrationForm';

const RegistrationPage = () => {
    return (
        <div className="RegistrationPage">
            <h1>Registration Page</h1>
            <RegistrationForm />
        </div>
    );
}

export default RegistrationPage;