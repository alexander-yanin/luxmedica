import React from "react";
import "./style.scss";


export const Circle = (props) => {
    return (
        <i className={`circle ${props.className ? props.className : ""} ${props.active ? "active" : ""}`} onClick={() => props.setCurrent(props.index)}/>
    );
};

export default Circle;