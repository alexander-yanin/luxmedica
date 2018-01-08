import React, { Fragment } from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";

import "./style.scss";

import isMobile from "libs/userAgent";
import Navbar from "./nav-bar/index";
import MobNavbar from "mobile/components/header/mob-navbar";
import AppointmentButton from "desktop/components/core/button/appointment";

// import config from "./../../config.js";
import logo_luxmedica from "static/img/logo_luxmedica.svg";


export class NavBarPanel extends React.Component {
    render() {
        return (
            <div className={`nav-bar-panel-wrapper`}>
                <div className={`nav-bar-panel`}>
                    <Link to={`/`}><img src={logo_luxmedica} alt={``}/></Link>
                    {
                        !isMobile.any() ?
                            <Fragment>
                                <Navbar/>
                                <AppointmentButton/>
                            </Fragment> :
                            <MobNavbar/>
                    }
                </div>
            </div>
        );
    }
}

export default NavBarPanel;

// const Wrapper = styled.div`
//     width: 100%;
//     height: 82px;
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
//     font-size: 16px;
//     color: #fff;
//
//     & > div {
//         max-width: 1140px;
//         height: 100%;
//         display: -webkit-box;
//         display: -moz-box;
//         display: -ms-flexbox;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-flex-direction: row;
//         -ms-flex-direction: row;
//         flex-direction: row;
//         -webkit-align-items: center;
//         align-items: center;
//     }
// `;
//
// const Appointment = styled.div`
//     width: 225px;
//     height: 45px;
//     margin-left: 110px;
//     -webkit-border-radius: 30px;
//     -moz-border-radius: 30px;
//     border-radius: 30px;
//     background-color: #fa1756;
//     box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
//     border: none;
//     outline: none;
//
//     a {
//         display: block;
//         width: 100%;
//         height: 100%;
//         -webkit-border-radius: 30px;
//         -moz-border-radius: 30px;
//         border-radius: 30px;
//         line-height: 45px;
//         text-align: center;
//         text-decoration: none;
//         color: #fff;
//         font-size: 18px;
//         font-family: PFAgoraSlabPro-Bold;
//     }
//
//     &:hover {
//         background: #c51143;
//     }
// `;