import React from 'react';

import '../Styles/ErrorMessage.css';

const ErrorMessage = (props) => {
    return (
        <div className="errorDiv"><span className="errorMessage">{props.message}</span></div>
    )
}

export default ErrorMessage;