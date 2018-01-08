import React from "react";
// import styled from "styled-components";
import Collapsible from 'react-collapsible';
import { Link } from "react-router-dom";

import LuxButton from "desktop/components/core/button/lux-button/lux-button";

import "./style.scss";
// import config from "./../../config.js";
import logo from "static/img/logo_luxmedica.svg";
import cancel from "static/img/cancel.svg";


export const Sidebar = props => {
    return (
        <div className={`sidebar`} style={{transform: `translateX(${props.sidebarEnabled ? 0 : 100}%)`}}>
            <div className={`sidebar-header`}>
                <div className={`sidebar-header__logo`} style={{backgroundImage: `url(${logo})`}}/>
                <div className={`sidebar-header__close`} onClick={props.handleToggleMenu} style={{backgroundImage: `url(${cancel})`}}/>
            </div>
            <ul className={`sidebar-nav`}>
                <li className={`sidebar-nav-item`}>
                    <a className={`sidebar-nav-item__link`} href={`http://dev.luxmedica.ru/service`}>Услуги</a>
                </li>
                <li className={`sidebar-nav-item`}>
                    <a className={`sidebar-nav-item__link`} href={`http://dev.luxmedica.ru/doctor`}>Врачи</a>
                    {/*<Collapsible trigger="Врачи" transitionTime={100}>*/}
                        {/*<Nav typeMenu={`submenu`}>*/}
                            {/*<li>*/}
                                {/*<a href="#">Галерея</a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                                {/*<a href="#">Награды</a>*/}
                            {/*</li>*/}
                        {/*</Nav>*/}
                    {/*</Collapsible>*/}
                </li>
                <li className={`sidebar-nav-item subnav-item`}>
                    {/*<a className={`sidebar-nav-item__link`} href={`http://dev.luxmedica.ru/about`}>О нас</a>*/}
                    <Collapsible trigger="О нас" transitionTime={100}>
                        <ul className={`sidebar-nav`}>
                            <li className={`sidebar-nav-item`}>
                                <a className={`sidebar-nav-item__link`} href="#">Галерея</a>
                            </li>
                            <li className={`sidebar-nav-item`}>
                                <Link className={`sidebar-nav-item__link`} to={`/about/shares`} onClick={props.handleToggleMenu}>Акции</Link>
                            </li>
                        </ul>
                    </Collapsible>
                </li>
                <li className={`sidebar-nav-item`}>
                    <a className={`sidebar-nav-item__link`} href={`#`}>Контакты</a>
                </li>
                <li className={`sidebar-nav-item`}>
                    <a className={`sidebar-nav-item__link`} href={`http://dev.luxmedica.ru/appointment`}>Записаться на приём</a>
                </li>
                <li className={`sidebar-nav-item`}>
                    <LuxButton text={`Перезвоните мне`} href="tel:+73832090697" handler={props.handleToggleMenu} style={{width: `240px`, height: `45px`, borderRadius: `100px`}}/>
                </li>
                <li className={`sidebar-nav-item`}>
                    <LuxButton text={`Написать в WhatsApp`} href="whatsapp://send?text=" handler={props.handleToggleMenu} style={{width: `240px`, height: `45px`, borderRadius: `100px`, marginBottom: `20px`}}/>
                </li>
                {/*<li className={`sidebar-nav-item lastItem`}>*/}
                    {/*<a href="#">Версия для слабовидящих</a>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
};

export default Sidebar;

// const SidebarWrapper = styled.nav`
//     z-index: 10;
//     position: fixed;
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -ms-flex-direction: column;
//     -webkit-flex-direction: column;
//     flex-direction: column;
//     width: 100%;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     background-color: #f9f9f9;
//     box-shadow: -1px 0 7px 0 rgba(0, 0, 0, 0.5);
//     transition: all .5s;
//     -webkit-transform: translateX(${props => props.sidebarEnabled ? 0 : 100}%);
//     -moz-transform: translateX(${props => props.sidebarEnabled ? 0 : 100}%);
//     -o-transform: translateX(${props => props.sidebarEnabled ? 0 : 100}%);
//     -ms-transform: translateX(${props => props.sidebarEnabled ? 0 : 100}%);
//     transform: translateX(${props => props.sidebarEnabled ? 0 : 100}%);
//     overflow: hidden;
// `;

// const Header = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -ms-flex-direction: row;
//     -webkit-flex-direction: row;
//     flex-direction: row;
//     -webkit-justify-content: space-between;
//     justify-content: space-between;
//     align-items: center;
//     -webkit-align-items: center;
//     -webkit-flex-shrink: 0;
//     flex-shrink: 0;
//     width: 100%;
//     height: 56px;
//     padding: 0 16px;
//     -moz-background-image: linear-gradient(to bottom, #2f223a, #42364f);
//     -o-background-image: linear-gradient(to bottom, #2f223a, #42364f);
//     -webkit-background-image: linear-gradient(to bottom, #2f223a, #42364f);
//     background-image: linear-gradient(to bottom, #2f223a, #42364f);
//     box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.5);
// `;

// const Logo = styled.div`
//     width: 110px;
//     height: inherit;
//     -moz-background-image: url(${config.imagePath}/logo_luxmedica.svg);
//     -o-background-image: url(${config.imagePath}/logo_luxmedica.svg);
//     -webkit-background-image: url(${config.imagePath}/logo_luxmedica.svg);
//     background-image: url(${config.imagePath}/logo_luxmedica.svg);
//     background-position: center center;
//     background-repeat: no-repeat;
//     -moz-background-size: contain;
//     -o-background-size: contain;
//     -webkit-background-size: contain;
//     background-size: contain;
// `;

// const Close = styled.div`
//     width: 20px;
//     height: 20px;
//     -moz-background-image: url(${props => props.url});
//     -o-background-image: url(${props => props.url});
//     -webkit-background-image: url(${props => props.url});
//     background-image: url(${props => props.url});
//     background-position: center center;
//     -moz-background-size: contain;
//     -o-background-size: contain;
//     -webkit-background-size: contain;
//     background-size: contain;
// `;

// const Nav = styled.ul`
//     list-style-type: none;
//     margin-top: 12px;
//     overflow-y: auto;
//
//     li {
//         display: block;
//         margin-bottom: 12px;
//         text-align: center;
//
//         &:last-child {
//             margin-bottom: 0;
//         }
//
//         a {
//             display: -webkit-box;
//             display: -moz-box;
//             display: -ms-flexbox;
//             display: -webkit-flex;
//             display: flex;
//             -ms-flex-direction: row;
//             -webkit-flex-direction: row;
//             flex-direction: row;
//             -webkit-justify-content: center;
//             justify-content: center;
//             align-items: center;
//             -webkit-align-items: center;
//             font-family: PFAgoraSlabPro;
//             font-size: 14px;
//             text-align: left;
//             color: #2f223a;
//             text-decoration: none;
//             font-family: PFAgoraSlabPro;
//             font-size: 18px;
//             color: ${props => props.typeMenu === 'main' ? '#2f223a' : 'rgba(47, 34, 58, 0.54)'};
//
//             &:hover {
//                 color: #fa1756;
//             }
//         }
//     }
//
//     .lastItem {
//         margin-top: 70px;
//     }
//
//     .buttonLink {
//         width: 240px;
//         height: 45px;
//         margin: 0 auto;
//         -webkit-border-radius: 100px;
//         -moz-border-radius: 100px;
//         border-radius: 100px;
//         background-color: #ffffff;
//         border: solid 1px #2f223a;
//         font-family: PFAgoraSlabPro;
//         font-size: 18px;
//         text-align: left;
//         color: #2f223a;
//     }
//
//     .Collapsible__trigger {
//         position: relative;
//
//
//     }
//
//     .is-closed::after {
//         content: '';
//         position: absolute;
//         top: 50%;
//         right: -20px;
//         width: 15px;
//         height: 15px;
//         -webkit-transform: translateY(-50%);
//         -moz-transform: translateY(-50%);
//         -o-transform: translateY(-50%);
//         -ms-transform: translateY(-50%);
//         transform: translateY(-50%);
//         -moz-background-image: url(${config.imagePath}/vectorpaint.svg);
//         -o-background-image: url(${config.imagePath}/vectorpaint.svg);
//         -webkit-background-image: url(${config.imagePath}/vectorpaint.svg);
//         background-image: url(${config.imagePath}/vectorpaint.svg);
//         background-repeat: no-repeat;
//         background-position: center center;
//         -moz-background-size: contain;
//         -o-background-size: contain;
//         -webkit-background-size: contain;
//         background-size: contain;
//     }
//
//     .is-open::after {
//         content: '';
//         position: absolute;
//         top: 50%;
//         right: -20px;
//         width: 15px;
//         height: 15px;
//         -webkit-transform: translateY(-50%) rotate(180deg);
//         -moz-transform: translateY(-50%) rotate(180deg);
//         -o-transform: translateY(-50%) rotate(180deg);
//         -ms-transform: translateY(-50%) rotate(180deg);
//         transform: translateY(-50%) rotate(180deg);
//         -moz-background-image: url(${config.imagePath}/vectorpaint.svg);
//         -o-background-image: url(${config.imagePath}/vectorpaint.svg);
//         -webkit-background-image: url(${config.imagePath}/vectorpaint.svg);
//         background-image: url(${config.imagePath}/vectorpaint.svg);
//         background-repeat: no-repeat;
//         background-position: center center;
//         -moz-background-size: contain;
//         -o-background-size: contain;
//         -webkit-background-size: contain;
//         background-size: contain;
//     }
// `;
//
// const Icon = styled.span`
//     display: inline-block;
//     margin-right: 5px;
//     width: 20px;
//     height: 20px;
//     -moz-background-image: url(${props => props.url});
//     -o-background-image: url(${props => props.url});
//     -webkit-background-image: url(${props => props.url});
//     background-image: url(${props => props.url});
//     -moz-background-size: contain;
//     -o-background-size: contain;
//     -webkit-background-size: contain;
//     background-size: contain;
//     background-repeat: no-repeat;
//     background-position: center center;
// `;