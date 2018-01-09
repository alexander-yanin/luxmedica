import React from "react";


export const Item = props => {
    return (
        <li className="footer-info-item">
            <img className="footer-info-item__icon" src={props.icon}/>
            <a href={props.href || "#"} className="footer-info-item__link">{props.children}</a>
        </li>
    );
};

export default Item;