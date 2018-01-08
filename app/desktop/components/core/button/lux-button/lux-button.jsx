import React from "react";
import "./style.scss";


export const LuxButton = props => {
    return (
        <a className={`lux-button ${props.className || ""}`} style={{...props.style}} href={props.href || `#`} onClick={props.handler}>{props.text}</a>
    );
};

export default LuxButton;