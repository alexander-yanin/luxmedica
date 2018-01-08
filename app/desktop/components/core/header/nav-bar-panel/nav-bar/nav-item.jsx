import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

// import config from "./../../config.js";
import chevron from "static/img/chevron.svg";


export class NavItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        };

        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        if (!this.props.children) return;
        const isHover = !this.state.isHover;
        this.setState({isHover})
    }

    render() {
        return (
            <li className={`nav-item`} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <div className={`nav-item-content ${this.state.isHover ? "active" : ""}`}>
                    <span className={`nav-item__text ${this.props.children ? "is-parent" : ""} ${this.state.isHover ? "active" : ""}`} >
                        {
                            this.props.reactLink ?
                                <Link className={`nav-item__link`} to={`${this.props.link}`}>{ this.props.text }</Link> :
                                <a className={`nav-item__link`} href={`${this.props.link}`}>{ this.props.text }</a>
                        }
                    </span>
                    { this.state.isHover ? this.props.children : null }
                </div>
            </li>
        );
    }
}

export default NavItem;

// const NavigationItem = styled.li`
//     width: 120px;
//     min-width: 100px;
//     max-width: 130px;
//     height: 41px;
//     line-height: 41px;
//     z-index: 1;
//     position: relative;
// `;
//
// const Content = styled.div`
//     position: absolute;
//     width: 100%;
//     left: 50%;
//     -webkit-transform: translateX(-50%);
//     -moz-transform: translateX(-50%);
//     -ms-transform: translateX(-50%);
//     -o-transform: translateX(-50%);
//     transform: translateX(-50%);
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: column;
//     -ms-flex-direction: column;
//     flex-direction: column;
//     -webkit-align-items: center;
//     align-items: center;
//     -webkit-box-sizing: border-box;
//     -moz-box-sizing: border-box;
//     box-sizing: border-box;
//     background-color: ${props => props.isHover ? '#2f223a' : 'transparent'};
//     -webkit-box-shadow: ${props => props.isHover ? '0 0 1px #ebebeb' : 'none'};
//     -moz-box-shadow: ${props => props.isHover ? '0 0 1px #ebebeb' : 'none'};
//     box-shadow: ${props => props.isHover ? '0 0 1px #ebebeb' : 'none'};
//     padding: 0 10px;
//     -webkit-border-radius: 15px;
//     -moz-border-radius: 15px;
//     border-radius: 15px;
// `;
//
// const Text = styled.span`
//     position: relative;
//     padding: 0 15px;
//
//     &:after {
//         content: '';
//         position: absolute;
//         top: 17px;
//         right: 0;
//         width: 10px;
//         height: 7px;
//         -webkit-background-image: url(${props => props.arrow});
//         -o-background-image: url(${props => props.arrow});
//         -moz-background-image: url(${props => props.arrow});
//         background-image: url(${props => props.arrow});
//         -webkit-background-size: cover;
//         -o-background-size: contain;
//         -moz-background-size: contain;
//         background-size: contain;
//         background-repeat: no-repeat;
//         background-position: center center;
//         -webkit-transform: rotate(${props => props.isHover ? 180 : 0}deg);
//         -moz-transform: rotate(${props => props.isHover ? 180 : 0}deg);
//         -ms-transform: rotate(${props => props.isHover ? 180 : 0}deg);
//         -o-transform: rotate(${props => props.isHover ? 180 : 0}deg);
//         transform: rotate(${props => props.isHover ? 180 : 0}deg);
//     }
//
//     a {
//         text-decoration: none;
//         font-family: PFAgoraSlabPro;
//         font-size: 18px;
//         font-weight: bold;
//         color: #ffffff;
//     }
// `;
//
//
