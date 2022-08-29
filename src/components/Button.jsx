import React from 'react';
import './button.css'

const Button = ({label, funcao, className}) => {


    return (
        <button className={className} onClick={() => funcao(label)}>
            {label}
        </button>
    )
}

export default Button;