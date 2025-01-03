import React from "react";
import './Button.css'

const Button = (props) => {
    return (
        <button onClick={props.callApi}>
            Click to Generate a Joke!
        </button>
    )
}


export default Button;