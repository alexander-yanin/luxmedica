import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";


import Nav from "desktop/components/core/footer/nav";
import Social from "desktop/components/core/footer/social";
import Info from "desktop/components/core/footer/info";

import logo from "static/img/logo_luxmedica.svg";


export const MobFooter = props => {
    const { address, phone, email, social } = props.infoAll;

    return (
        <footer className={`mobile`}>
            <div className={`footer-content`}>
                <div className={`footer-logo`}>
                    <img src={logo} style={{width: "130px"}} alt="luxmedica люксмедика"/>
                    <Social className={`mobile`} href={social}/>
                </div>
                <Info className={`mobile`}/>
                <div className={`footer-nav-section`}>
                    <Nav className={`mobile`}/>
                </div>
                <div className={`footer-copyright`}>
                    <span>© ООО "Городской Центр Медосмотра" 2016-2017</span>
                    <span>Имеются противопоказания.<br/>Проконсультируйтесь со специлистом</span>
                </div>
            </div>
        </footer>
    );
};


export default MobFooter;