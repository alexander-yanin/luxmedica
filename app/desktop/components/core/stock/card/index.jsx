import React from "react";
import "./style.scss";
// import styled from "styled-components";
import isMobile from "libs/userAgent";

export const Card = (props) => {
    const { stock } = props;
    return (
        <div className={`stock-card ${isMobile.any() ? "mobile" : ""}`}>
            <div className={`stock-card-preview`} style={{backgroundImage: `url(${stock.imagesPath.preview})`}}/>
            <div className={`stock-card-description-wrapper`}>
                <div className={`stock-card-description`}>
                    <label>{stock.title}</label>
                    <span>до {stock.expired_at}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;

// const CardWrapper = styled.div`
//     position: relative;
//     display: inline-block;
//     width: 360px;
//     height: 307px;
//     -webkit-box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     box-sizing: border-box;
//     overflow: hidden;
//     -webkit-border-radius: 5px;
//     -moz-border-radius: 5px;
//     border-radius: 5px;
// `;

// const Background = styled.div`
//     width: 360px;
//     height: 210px;
//     -webkit-background-image: url(${props => props.url});
//     -o-background-image: url(${props => props.url});
//     -moz-background-image: url(${props => props.url});
//     background-image: url(${props => props.url});
//     -webkit-background-size: cover;
//     -o-background-size: cover;
//     -moz-background-size: cover;
//     background-size: cover;
//     // background-position: center center;
// `;

// const DescriptionWrapper = styled.div`
//     width: 360px;
//     height: 97px;
//     background-color: #2f223a;
// `;

// const Description = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: column;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     -webkit-justify-content: space-between;
//     justify-content: space-between;
//     width: 328px;
//     height: 100%;
//     margin: 0 auto;
//     padding: 7px 0 9px;
//
//     label {
//         font-family: PFAgoraSlabPro;
//         font-size: 18px;
//         line-height: 1.33;
//         text-align: left;
//         color: #ffffff;
//         white-space: normal;
//     }
//
//     span {
//         font-family: PFAgoraSlabPro;
//         font-size: 14px;
//         text-align: left;
//         color: rgba(255, 255, 255, 0.7);
//     }
// `;