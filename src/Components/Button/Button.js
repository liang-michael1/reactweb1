import React from 'react';
import './Button.css'
/*
// add props to () so that you can assign specific name to buttons 
function Button(props) {
    return (
        <div >
            <button className="button">{props.buttonName} </button>
        </div>
    )
}

export default Button;
*/

// add props to () so that you can assign specific name to buttons 

function Button(props) {
    return (
        <div >

            <button className="button" style={{ backgroundColor: `${props.color}` }}>{props.buttonName}</button>
        </div>
    )
}

export default Button;