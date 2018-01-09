import React from "react";
import Item from "./item";
import "./style.scss";

import instagram from "static/img/insta.svg";
import facebook from "static/img/fb.svg";
import vk from "static/img/vk.svg";

export const Social = props => {
    return (
        <div className={`footer-social ${props.className ? props.className : ""}`}>
            <Item href={props.href.in} icon={instagram}/>
            <Item href={props.href.fc} icon={facebook}/>
            <Item href={props.href.vk} icon={vk}/>
        </div>
    );
};

export default Social;