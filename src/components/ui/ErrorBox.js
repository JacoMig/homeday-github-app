import React from 'react';

const ErrorBox = ({isValid, message}) => {
    console.log(isValid)
    return (
        !isValid && <span className="error help is-danger">{message}</span> || null
    );
};

export default ErrorBox;