import React from "react";
// import styled from "styled-components";
import LuxButton from "desktop/components/core/button/lux-button/lux-button";


export const SlideContent = (props) => {
    return (
        <div className={`slide-content`}>
            <h3 dangerouslySetInnerHTML={{__html: props.slide.title}}/>
            <ul>
                {
                    props.slide.content.strings.map((string, index) => (
                        <li key={index}>{string}</li>
                    ))
                }
            </ul>
            <a href={props.slide.content.buttonLink}>Узнать больше</a>
            <LuxButton text={`Узнать больше`} href={props.slide.content.buttonLink} className={`content-button`} />

        </div>
    );
};

export default SlideContent;


// const Content = styled.div`
//     position: absolute;
//     width: 60%;
//     height: 410px;
//     top: 92px;
//     left: 0;
//     white-space: normal;
//
//     h3 {
//         font-family: ProximaNova;
//         font-size: 48px;
//         font-weight: bold;
//         text-align: left;
//         margin: 0 0 36px 11px;
//         color: #fa1756;
//     }
//
//     ul {
//         font-family: PFAgoraSlabPro;
//         font-size: 24px;
//         margin: 0 0 36px 0;
//         padding: 0 0 0 24px;
//         line-height: 1.42;
//         text-align: left;
//         color: #2f223a;
//         white-space: normal;
//     }
//
//     a {
//         position: absolute;
//         bottom: 24px;
//         left: 11px;
//         width: 176px;
//         height: 58px;
//         -webkit-border-radius: 30px;
//         -moz-border-radius: 30px;
//         border-radius: 30px;
//         border: solid 1px #2f223a;
//         font-family: PFAgoraSlabPro;
//         font-size: 18px;
//         color: #2f223a;
//         outline: none;
//         cursor: pointer;
//         background-color: transparent;
//         text-decoration: none;
//         line-height 60px;
//         text-align: center;
//     }
// `;