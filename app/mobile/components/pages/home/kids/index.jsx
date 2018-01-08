import React from "react";
// import styled from "styled-components";
import "./style.scss";
// import config from "./../../../config.js";
import LuxButton from "desktop/components/core/button/lux-button/lux-button";
import kids_sprite from "static/img/pattern.png";
import kids_boy from "static/img/kids.svg";
import kids_logo from "static/img/LuxmedicaKids.svg";

const Children = props => {
    return (
        <section className={`mob-kids-banner-wrapper`} style={{backgroundImage: `url(${kids_sprite})`}}>
            <div className={`mob-kids-banner`}>
                <h3 className={`mob-kids-banner-header`}>Здоровый ребенок – счастье для всей семьи.</h3>
                <div className={`mob-kids-banner-content`}>
                    <div className={`mob-kids-banner-boy`} style={{backgroundImage: `url(${kids_boy})`}}/>
                    <div className={`mob-kids-banner-description`}>
                        <img src={kids_logo} alt=""/>
                        <p>В <span className={`bold-text`}>LUXMEDICA</span> здоровье ваших детей под надежной защитой детских специалистов Новосибирска.</p>
                        <LuxButton className={`mob-kids-banner-btn light`} text={`Узнать больше`} href={`http://luxmedica.ru/news/view?id=45`}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Children;

// const WrapperChildren = styled.section`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -ms-flex-direction: row;
//     -webkit-flex-direction: row;
//     flex-direction: row;
//     -webkit-justify-content: center;
//     justify-content: center;
//     width: 100%;
//     min-height: 300px;
//     -moz-background-image: url(${config.imagePath}/pattern.png);
//     -o-background-image: url(${config.imagePath}/pattern.png);
//     -webkit-background-image: url(${config.imagePath}/pattern.png);
//     background-image: url(${config.imagePath}/pattern.png);
// `;

// const ContentWrapper = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -ms-flex-direction: column;
//     -webkit-flex-direction: column;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     min-height: 300px;
//     min-width: 320px;
//     max-width: 736px;
//     padding: 0 10px 20px;
// `;

// const Header = styled.h3`
//     font-family: ProximaNova;
//     font-size: 20px;
//     font-weight: bold;
//     color: #ffffff;
//     margin: 20px auto;
// `;

// const Content = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -ms-flex-direction: row;
//     -webkit-flex-direction: row;
//     flex-direction: row;
//     width: 100%;
//     height: inherit;
// `;

// const Image = styled.div`
//     width: 40%;
//     height: 156px;
//     -moz-background-image: url(${config.imagePath}/kids.svg);
//     -o-background-image: url(${config.imagePath}/kids.svg);
//     -webkit-background-image: url(${config.imagePath}/kids.svg);
//     background-image: url(${config.imagePath}/kids.svg);
//     background-position: center center;
//     background-repeat: no-repeat;
//     -moz-background-size: contain;
//     -o-background-size: contain;
//     -webkit-background-size: contain;
//     background-size: contain;
// `;

// const Text = styled.div`
//     width: 60%;
//     height: inherit;
//     font-family: PFAgoraSlabPro;
//
//     img {
//         width: 90%;
//         margin-bottom: 15px;
//     }
//
//     p {
//         font-size: 14px;
//         line-height: 1.43;
//         text-align: left;
//         color: #ffffff;
//         padding-bottom: 20px;
//     }
// `;

// const Bold = styled.span`
//     font-family: ProximaNova-Extrabld;
// `;
//
// const ButtonLink = styled.a`
//     display: block;
//     width: 150px;
//     height: 32px;
//     -webkit-border-radius: 30px;
//     -moz-border-radius: 30px;
//     border-radius: 30px;
//     border: solid 1px #ffffff;
//     font-size: 14px;
//     color: #ffffff;
//     background-color: transparent;
//     text-align: center;
//     line-height: 33px;
//     text-decoration: none;
// `;