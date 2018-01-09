import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import Nav from "./nav";
import Social from "./social";
import Info from "./info";

import logo from "static/img/logo_luxmedica.svg";

export const Footer = props => {
    const { address, phone, email, social } = props.infoAll;

    return (
        <footer>
            <div className={`footer-content`}>
                <div className={`footer-nav-section`}>
                    <div className={`footer-logo`}>
                        <img src={logo} alt="luxmedica люксмедика"/>
                        <span>© ООО "Городской Центр Медосмотра" 2016-2017</span>
                        <span>Имеются противопоказания.<br/>Проконсультируйтесь со специлистом</span>
                    </div>
                    <Nav/>
                </div>
                <div className={`footer-info-section`}>
                    <Info/>
                    <Social href={social}/>
                </div>
            </div>
        </footer>
    );
};


export default Footer;