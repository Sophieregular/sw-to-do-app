import React, { useState } from 'react'
import './index.css'


const ClickerButton = () => {

    const handleClick = () => {
        alert('Hello! :) Thanks for visiting! I hope you have a good day!');
    }

return (
<button
    className="clicker-button"
    onClick={() => handleClick()}>
    Click Me (For a Surprise)
</button>
);
}


export default ClickerButton