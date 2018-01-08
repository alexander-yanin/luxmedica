import React from "react";
// import styled from "styled-components";
import "./style.scss";

// import config from "./../../config.js";
import arrow from "static/img/chevron_right.svg";


export const Arrow = (props) => {
    const style = {
        transform: `rotate(${props.direction === 'right' ? 0 : 180}deg)`,
        backgroundImage: `url(${arrow})`,
        left: `${props.direction === 'left' ? props.side : ""}px`,
        right: `${props.direction === 'right' ? props.side : ""}px`,
        top: props.top
    };
    return (
        <div className={`arrow`} style={style} onClick={props.handleArrow}>
        </div>
    );
};

export default Arrow;
//
// const IconWrapper = styled.div`
//     position: absolute;
//     width: 50px;
//     height: 80px;
//     top: ${props => props.top};
//     ${props => props.direction === 'left' ? `left: ${props.side}px` : `right: ${props.side}px`};
//     -webkit-transform: rotate(${props => props.direction === 'right' ? 0 : 180}deg);
//     -moz-transform: rotate(${props => props.direction === 'right' ? 0 : 180}deg);
//     -ms-transform: rotate(${props => props.direction === 'right' ? 0 : 180}deg);
//     -o-transform: rotate(${props => props.direction === 'right' ? 0 : 180}deg);
//     transform: rotate(${props => props.direction === 'right' ? 0 : 180}deg);
//     font-size: 10em;
//     color: #2f223a;
//     opacity: .5;
//     // transition: opacity .3s;
//     -webkit-background-image: url(${config.imagePath}/chevron_right.svg);
//     -o-background-image: url(${config.imagePath}/chevron_right.svg);
//     -moz-background-image: url(${config.imagePath}/chevron_right.svg);
//     background-image: url(${config.imagePath}/chevron_right.svg);
//     background-repeat: no-repeat;
//     background-position: center center;
//     &:hover {
//         opacity: 1;
//     }
// `;