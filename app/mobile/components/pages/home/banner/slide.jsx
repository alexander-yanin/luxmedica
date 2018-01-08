import React from "react";

import LuxButton from "desktop/components/core/button/lux-button/lux-button";
// import styled from "styled-components";


export const Slide = props => {
    const { slide } = props;
    return (
        <div className={`mob-banner-slide`}>
            <div className={`mob-banner-slide-image`} style={{backgroundImage: `url(${slide.imagePath})`}}/>
            <div className={`mob-banner-slide-content`}>
                <h3>{slide.title}</h3>
                {slide.content.strings.slice(0, 2).map((string, index) => (
                    <p key={index}>{string}</p>
                ))}
                {/*<a href={slide.content.buttonLink}>Узнать больше</a>*/}
                <LuxButton text={`Узнать больше`} href={slide.content.buttonLink} />
            </div>
        </div>
    );
};

export default Slide;

// const SlideWrapper = styled.div`
//     -webkit-flex-shrink: 0;
//     flex-shrink: 0;
//     width: 100%;
//     height: inherit;
//     white-space: normal;
// `;

// const Background = styled.div`
//     width: 100%;
//     height: 195px;
//     -moz-background-image: url(${props => props.url});
//     -o-background-image: url(${props => props.url});
//     -webkit-background-image: url(${props => props.url});
//     background-image: url(${props => props.url});
//     background-repeat: no-repeat;
//     -moz-background-size: cover;
//     -o-background-size: cover;
//     -webkit-background-size: cover;
//     background-size: cover;
//     background-position: center right;
// `;

// const Info = styled.div`
//     position: relative;
//     width: 100%;
//     height: 232px;
//     padding: 10px 11px 0;
//     font-family: PFAgoraSlabPro;
//     color: #2f223a;
//
//     h3 {
//         font-family: ProximaNova;
//         font-size: 20px;
//         font-weight: bold;
//         text-align: left;
//         color: #fa1756;
//         margin-bottom: 10px;
//     }
//
//     p {
//         display: block;
//         font-size: 14px;
//         line-height: 1;
//         text-align: left;
//         margin-bottom: 10px;
//     }
//
//     a {
//         position: absolute;
//         bottom: 50px;
//         left: 11px;
//         display: block;
//         width: 150px;
//         height: 32px;
//         -webkit-border-radius: 30px;
//         -moz-border-radius: 30px;
//         border-radius: 30px;
//         border: solid 1px #2f223a;
//         font-size: 14px;
//         background-color: transparent;
//         text-align: center;
//         text-decoration: none;
//         line-height: 35px;
//         color: #2f223a;
//     }
// `;