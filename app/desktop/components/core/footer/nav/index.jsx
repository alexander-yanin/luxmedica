import React from "react";
import Item from "./item";
import "./style.scss";


export const FooterNav = props => {
    return (
        <ul className={`footer-nav ${props.className ? props.className : ""}`}>
            <Item>Услуги</Item>
            <Item>Врачи</Item>
            <Item>О клинике</Item>
            <Item>Акции</Item>
            <Item>Вакансии</Item>
            <Item>Правовая информация</Item>
        </ul>
    );
};

export default FooterNav;