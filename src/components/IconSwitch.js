import React from "react";

const IconSwitch = ({icon, onSwitch}) => {
    return (
        <button className="icon-switch" onClick={onSwitch}>
            <i className='material-icons'>{icon}</i>
        </button>
    )
}

export default IconSwitch;