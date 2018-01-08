import React from "react";
// import styled from "styled-components";
import "./style.scss";

export const Card = (props) => {
    const { doctor } = props;
    return (
        <div className={`doctor-card ${props.className ? props.className : ""}`}>
            <div className={`doctor-card-avatar`} style={{backgroundImage: `url(${doctor.imagePath})`}}/>
            <div className={`doctor-card-info`}>
                <div className={`doctor-card-info__fullname`}>
                    {doctor.last_name}<br/>
                    {`${doctor.first_name} ${doctor.middle_name}`}
                </div>
                <label className={`doctor-card-info__description`}>
                    {doctor.description}
                </label>
            </div>
        </div>
    );
};

export default Card;

// const CardWrapper = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: row;
//     -ms-flex-direction: row;
//     flex-direction: row;
//     max-width: 540px;
//     height: 200px;
//     -webkit-box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     box-sizing: border-box;
//     white-space: normal;
//     margin-right: 30px;
// `;

// const Avatar = styled.div`
//     display: inline-block;
//     width: 200px;
//     height: 200px;
//     -webkit-background-image: url(${props => props.url});
//     -o-background-image: url(${props => props.url});
//     -moz-background-image: url(${props => props.url});
//     background-image: url(${props => props.url});
//     -webkit-background-size: cover;
//     -o-background-size: cover;
//     -moz-background-size: cover;
//     background-size: cover;
//     background-repeat: no-repeat;
//     -webkit-border-radius: 100%;
//     -moz-border-radius: 100%;
//     border-radius: 100%;
// `;

// const RightBlock = styled.div`
//     display: inline-block;
//     width: 340px;
//     height: 100%;
//     padding-left: 17px;
// `;

// const FullName = styled.div`
//     font-family: PFAgoraSlabPro;
//     font-size: 24px;
//     line-height: 1.33;
//     text-align: left;
//     color: #2f223a;
//     margin: 6px 0 14px;
// `;

// const Description = styled.label`
//     display: block;
//     height: 100px;
//     overflow-y: hidden;
//     font-family: PFAgoraSlabPro;
//     font-size: 18px;
//     line-height: 1.22;
//     text-align: left;
//     color: #2f223a;
// `;