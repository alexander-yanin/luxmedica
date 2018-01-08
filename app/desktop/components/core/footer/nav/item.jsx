import React from "react";


export const Item = props => {
    return (
        <li className={`footer-nav-item`}><a className={`footer-nav-item__link`} href={props.href || "#"}>{props.children}</a></li>
    );
};

export default Item;