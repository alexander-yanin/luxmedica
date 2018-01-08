import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";


export const LuxButton = props => {
    return (
        <Link className={`lux-button ${props.className ? props.className : ""}`} style={{...props.style}} to={props.href || `#`} onClick={props.handler}>{props.text}</Link>
    );
};

export default LuxButton;