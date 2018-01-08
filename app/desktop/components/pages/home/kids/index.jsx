import React from "react";
import "./style.scss";
// import styled from "styled-components";

// import config from "./../../../config.js";
import isMobile from "libs/userAgent";

import LuxButton from "desktop/components/core/button/lux-button/lux-button";
import kids_sprite from "static/img/pattern.png";
import kids_boy from "static/img/kids.svg";
import kids_logo from "static/img/LuxmedicaKids.svg";


const Kids = props => {
    return (
        <section className={`kids-banner`} style={{backgroundImage: `url(${kids_sprite})`}}>
            <div className={`kids-banner-boy`} style={{backgroundImage: `url(${kids_boy})`}}/>
            <div className={`kids-banner-description`}>
                <img src={kids_logo} alt=""/>
                <h3>Здоровый ребенок – счастье для всей семьи.</h3>
                <label>В <span className={`bold-text`}>LUXMEDICA</span> здоровье ваших детей под надежной защитой детских специалистов Новосибирска.</label>
                <LuxButton className={`kids-banner-btn`} text={`Узнать больше`} href={`http://luxmedica.ru/news/view?id=45`}/>
            </div>
        </section>
    );
};

export default Kids;

// const ChildrenWrapper = styled.section`
//     position: relative;
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
//     height: 659px;
//     -webkit-background-image: url(${config.imagePath}/pattern.png);
//     -o-background-image: url(${config.imagePath}/pattern.png);
//     -moz-background-image: url(${config.imagePath}/pattern.png);
//     background-image: url(${config.imagePath}/pattern.png);
//     -webkit-box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     box-sizing: border-box;
// `;

// const Image = styled.div`
//     width: 465px;
//     height: 100%;
//     -webkit-background-image: url(${config.imagePath}/kids.svg);
//     -o-background-image: url(${config.imagePath}/kids.svg);
//     -moz-background-image: url(${config.imagePath}/kids.svg);
//     background-image: url(${config.imagePath}/kids.svg);
//     background-position: left center;
//     background-repeat: no-repeat;
// `;

// const Description = styled.div`
//     width: 589px;
//     height: 100%;
//
//     img {
//         margin: 150px 0 0 34px;
//     }
//
//     h3 {
//         margin: 36px 0 0 34px;
//         font-family: ProximaNova;
//         font-size: 48px;
//         font-weight: bold;
//         text-align: left;
//         color: #ffffff;
//     }
//
//     label {
//         display: block;
//         margin: 26px 0 0 34px;
//         font-family: PFAgoraSlabPro;
//         font-size: 24px;
//         line-height: 1.38;
//         text-align: left;
//         color: #ffffff;
//     }
// `;

// const LinkButton = styled.a`
//     display: block;
//     width: 176px;
//     height: 58px;
//     margin: 24px 0 0 34px;
//     -webkit-border-radius: 30px;
//     -moz-border-radius: 30px;
//     border-radius: 30px;
//     border: solid 1px #ffffff;
//     font-family: PFAgoraSlabPro;
//     font-size: 18px;
//     color: #ffffff;
//     background-color: transparent;
//     text-decoration: none;
//     text-align: center;
//     line-height 60px;
// `;
//
// const Bold = styled.span`
//     font-family: ProximaNova-Extrabld;
// `;