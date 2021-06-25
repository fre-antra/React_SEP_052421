import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.onClick} className="button" style={{backgroundColor: props.color, borderStyle: "none" }}>Set {props.color}</button>
    )
}

export default Button;
