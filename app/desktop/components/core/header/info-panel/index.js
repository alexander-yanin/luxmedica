import React from "react";
// import styled from "styled-components";

// import config from "./../../config.js";
import "./style.scss";
import call from "static/img/call.svg";
import time from "static/img/time.svg";

export class Top extends React.Component {
    render() {
        const { chat, headerWorkTime, phone } = this.props.infoAll;

        return (
            <div className={`info-panel-wrapper`}>
                <div className={`info-panel`}>
                    <ul className={`info-panel-list`}>
                        <li className={`info-panel-list__item`}><img className={`info-panel-list__item-icon`} src={call} alt={`call`}/><a href={`tel:${phone[0]}`}>{ phone[0] }</a></li>
                        <li className={`info-panel-list__item`}><i>WhatsApp</i><a href={`whatsapp://send?text=`}>{ chat }</a></li>
                        <li className={`info-panel-list__item`}><img className={`info-panel-list__item-icon`} src={time} alt={`time`}/><span>{ headerWorkTime }</span></li>
                    </ul>
                    <div className={`info-panel-search`}><i/><input type={`text`} placeholder={`Поиск по сайту`} /></div>
                    <a className={`info-panel-bad-eye`} href={`#`}><i/></a>
                </div>
            </div>
        );
    }
}

export default Top;

// const Wrapper = styled.div`
//     width: 100%;
//     height: 44px;
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
//     border-bottom: solid 1px #979797;
//     font-family: PFAgoraSlabPro;
//     font-size: 16px;
//     color: #fff;
//
//     & > div {
//         width: 1140px;
//         height: 100%;
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

// const InfoList = styled.ul`
//     width: 100%;
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: row;
//     -ms-flex-direction: row;
//     flex-direction: row;
//     -webkit-align-items: center;
//     align-items: center;
//     -webkit-justify-content: space-between;
//     justify-content: space-between;
//     padding: 0;
//     margin: 0;
//     list-style-type: none;
//
//     & > li {
//         display: -webkit-box;
//         display: -moz-box;
//         display: -ms-flexbox;
//         display: -webkit-flex;
//         display: flex;
//         -webkit-flex-direction: row;
//         -ms-flex-direction: row;
//         flex-direction: row;
//         padding-right: 28px;
//
//         &:last-child {
//             padding: 0;
//         }
//         & > img {
//             width: 20px;
//             height: 20px;
//             padding-right: 10px;
//         }
//         & > i {
//             padding-right: 10px;
//             font-style: normal;
//             font-family: ProximaNova;
//         }
//         & > span {
//             display: block;
//             line-height: 20px;
//             font-family: PFAgoraSlabPro;
//             font-size: 16px;
//             color: #fff;
//             text-decoration: none;
//         }
//
//         & > a {
//             font-family: PFAgoraSlabPro;
//             font-size: 16px;
//             color: #fff;
//             text-decoration: none;
//             line-height: 24px;
//         }
//     }
// `;
//
// const Search = styled.div`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: row;
//     -ms-flex-direction: row;
//     flex-direction: row;
//     -webkit-align-items: center;
//     align-items: center;
//     position: relative;
//     margin-left: 45px;
//
//     & > i {
//         width: 20px;
//         height: 20px;
//         display: block;
//         position: absolute;
//         top: 13px;
//         left: 13px;
//         background: url('${config.imagePath}/search.svg');
//         background-repeat: no-repeat;
//         background-position: center center;
//     }
//
//     & > input {
//         width: 166px;
//         height: 30px;
//         position: relative;
//         -webkit-border-radius: 100px;
//         -moz-border-radius: 100px;
//         border-radius: 100px;
//         border: solid 1px rgba(255, 255, 255, 0.7);
//         background: transparent;
//         font-size: 16px;
//         font-family: PFAgoraSlabPro;
//         color: rgba(255, 255, 255, .7);
//         outline: none;
//         -webkit-box-sizing: border-box;
//         -moz-box-sizing: border-box;
//         box-sizing: border-box;
//         padding-left: 38px;
//         padding-right: 10px;
//         padding-top: 4px;
//     }
// `;
//
// const Eye = styled.a`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: row;
//     -ms-flex-direction: row;
//     flex-direction: row;
//     -webkit-align-items: center;
//     align-items: center;
//     margin-left: 40px;
//
//     & > i {
//         display: block;
//         width: 46px;
//         height: 22px;
//         background: url('${config.imagePath}/eye.svg');
//         background-repeat: no-repeat;
//         background-position: center center;
//     }
// `;