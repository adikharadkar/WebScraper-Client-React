import React from 'react';

import '../Styles/Button.css';

const Button = (props) => {
    return (
        <button>{props.value}</button>
    )
}

export default Button;