import React from "react";
// import styled from "styled-components";
import "./style.scss";
import { Link } from "react-router-dom";

// import config from "./../../config.js";
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
                <div className={`footer-content-left-column`}>
                    <Link to={`/`}><img className={`footer-logo`} src={logo}/></Link>
                    <label className={`footer-content-small-text`}>© ООО "Городской Центр Медосмотра" 2016-2017</label>
                    <label className={`footer-content-small-text`}>Имеются противопоказания. <br/>Проконсультируйтесь со специалистом</label>
                </div>
                <div className={`footer-content-center-column`}>
                    <div className={`footer-content-list-service`}>
                        <li style={{marginBottom: `14px`}}><a href={`http://luxmedica.ru/about`}>О нас</a></li>
                        <li style={{marginBottom: `14px`}}><a href={`http://luxmedica.ru/doctor`}>Врачи</a></li>
                        <li style={{marginBottom: `14px`}}><a href={`http://luxmedica.ru/news`}>Новости</a></li>
                        <li style={{marginBottom: `14px`}}><Link to={`/about/shares`}>Акции</Link></li>
                        <li style={{marginBottom: `14px`}}><a href={`#`}>Вакансии</a></li>
                        <li style={{marginBottom: `14px`}}><a href={`http://luxmedica.ru/service`}>Услуги</a></li>
                        <li style={{marginBottom: `14px`}}><a href={`http://luxmedica.ru/law`}>Правовая информация</a></li>
                    </div>
                </div>
                <div className={`footer-content-right-column`}>
                    <div className={`footer-content-list-service`}>
                        <li style={{marginBottom: `6px`}}><img src={map_marker} alt="" style={{width: `9px`, height: `13px`}}/>{ address }</li>
                        <li style={{marginBottom: `6px`}}><img src={call} style={{width: `13.3px`, height: `13px`}} alt=""/><a href={`tel:${phone[0]}`}>{phone[0]}</a></li>
                        <li style={{marginBottom: `6px`}}><img src={mail} style={{width: `13px`, height: `10px`}} alt=""/><a href={`mailto:${email}`}>{email}</a></li>
                    </div>
                </div>
                <div className={`footer-content-social-list`}>
                    <a href={`${social.in}`} target={`_blank`}><img src={instagram} alt={``}/></a>
                    <a href={`${social.fc}`} target={`_blank`}><img src={facebook} alt={``}/></a>
                    <a href={`${social.vk}`} target={`_blank`}><img src={vk} alt={``}/></a>
                </div>
            </div>
        </footer>
    );
};


export default Footer;

// const FooterWrapper = styled.footer`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: row;
//     -ms-flex-direction: row;
//     flex-direction: row;
//     -webkit-justify-content: center;
//     justify-content: center;
//     width: 100%;
//     height: 130px;
//     background-color: #4b4353;
//
//     & > div {
//         position: relative;
//         max-width: 1140px;
//         height: inherit;
//         display: -webkit-box;
//         display: -moz-box;
//         display: -ms-flexbox;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-flex-direction: row;
//         -ms-flex-direction: row;
//         flex-direction: row;
//     }
// `;

// const LeftColumn = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: column;
//     -ms-flex-direction: column;
//     flex-direction: column;
// `;
//
// const CenterColumn = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: column;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     flex-shrink: 12;
//     width: 100%;
// `;
//
// const RightColumn = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: row;
//     -ms-flex-direction: row;
//     flex-direction: row;
//     margin-left: 350px;
// `;

// const Logo = styled.img`
//     margin-top: 16px;
//     margin-bottom: 5px;
// `;

// const SmallText = styled.label`
//     font-family: PFAgoraSlabPro;
//     font-size: 10px;
//     text-align: left;
//     color: #ffffff;
//     margin: 2px 0;
//     line-height: 1;
// `;

// const ListService = styled.ul`
//     height: 130px;
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: column;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     -webkit-flex-wrap: wrap;
//     -ms-flex-wrap: wrap;
//     flex-wrap: wrap;
//     padding: 18px 0 0;
//     list-style-type: none;
//     font-family: PFAgoraSlabPro;
//     font-size: 16px;
//     text-align: left;
//     color: #ffffff;
//
//     & li:last-child {
//         margin-bottom: 0;
//     }
//
//     li {
//         margin-bottom: ${props => props.marginBottom}px;
//         margin-left: 65px;
//
//         a {
//             font-family: PFAgoraSlabPro;
//             font-size: 16px;
//             text-align: left;
//             color: #ffffff;
//             text-decoration: none;
//             padding-bottom: 2px;
//
//             &:hover {
//                 text-decoration: underline;
//             }
//         }
//     }
// `;

// const Icon = styled.img`
//     width: ${props => props.size.width}px;
//     height: ${props => props.size.height}px;
//     margin-right: 13px;
// `;

// const Social = styled.div`
//     position: absolute;
//     right: 0;
//     bottom: 20px;
//     width: 96px;
//     height: 24px;
//     -webkit-box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     box-sizing: border-box;
//
//     a {
//         margin-right: 12px;
//     }
//
//     & a:last-child {
//         margin-right: 0;
//     }
//
//     img {
//         position: relative;
//         width: 24px;
//         height: 24px;
//     }
// `;