import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import logo from "static/img/logo_luxmedica.svg";
import map_marker from "static/img/map_marker.svg";
import call from "static/img/call.svg";
import mail from "static/img/mail.svg";
import instagram from "static/img/insta.svg";
import facebook from "static/img/fb.svg";
import vk from "static/img/vk.svg";

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
                    <ul className={`footer-nav`}>
                        <li className={`footer-nav-item`}><a className={`footer-nav-item__link`} href="#">Услуги</a></li>
                        <li className={`footer-nav-item`}><a className={`footer-nav-item__link`} href="#">Врачи</a></li>
                        <li className={`footer-nav-item`}><a className={`footer-nav-item__link`} href="#">О клинике</a></li>
                        <li className={`footer-nav-item`}><a className={`footer-nav-item__link`} href="#">Акции</a></li>
                        <li className={`footer-nav-item`}><a className={`footer-nav-item__link`} href="#">Вакансии</a></li>
                        <li className={`footer-nav-item`}><a className={`footer-nav-item__link`} href="#">Правовая информация</a></li>
                    </ul>
                </div>
                <div className={`footer-info-section`}>
                    <ul className="footer-info">
                        <li className="footer-info-item">
                            <img className="footer-info-item__icon" src={map_marker}/>
                            <a href="#" className="footer-info-item__link">г. Новосибирск, Вокзальная магистраль, 1/1<br/>БЦ Лига Капитал, 3 этаж  </a>
                        </li>
                        <li className="footer-info-item">
                            <img className="footer-info-item__icon" src={call}/>
                            <a href="#" className="footer-info-item__link">+7 (383) 209-06-97</a>
                        </li>
                        <li className="footer-info-item">
                            <img className="footer-info-item__icon" src={mail}/>
                            <a href="#" className="footer-info-item__link">info@luxmedica.ru</a>
                        </li>
                    </ul>
                    <div className={`footer-social`}>
                        <a className={`footer-social-link`} target={`_blank`} href={`${social.in}`}><img className={`footer-social-icon`} src={instagram} alt="luxmedica instagram"/></a>
                        <a className={`footer-social-link`} target={`_blank`} href={`${social.fc}`}><img className={`footer-social-icon`} src={facebook} alt="luxmedica facebook"/></a>
                        <a className={`footer-social-link`} target={`_blank`} href={`${social.vk}`}><img className={`footer-social-icon`} src={vk} alt="luxmedica vk"/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;