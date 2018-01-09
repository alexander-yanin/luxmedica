import React from "react";
import Item from "./item";
import "./style.scss";

import map_marker from "static/img/map_marker.svg";
import call from "static/img/call.svg";
import mail from "static/img/mail.svg";

export const Info = props => {
    return (
        <ul className={`footer-info ${props.className ? props.className : ""}`}>
            <Item icon={map_marker}>г. Новосибирск, Вокзальная магистраль, 1/1<br/>БЦ Лига Капитал, 3 этаж</Item>
            <Item icon={call}>+7 (383) 209-06-97</Item>
            <Item icon={mail}>info@luxmedica.ru</Item>
        </ul>
    );
};

export default Info;