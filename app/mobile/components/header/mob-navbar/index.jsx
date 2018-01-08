import React from "react";
// import styled from "styled-components";

import "./style.scss";

// import config from "./../../config.js";
import Sidebar from "./../sidebar";
import NavItem from "./mob-nav-item";

import whatsapp from "static/img/whatsapp-logo.svg";
import call from "static/img/call.svg";
import search from "static/img/search.svg";
import hamburger from "static/img/hamburger-menu.svg";


export class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarEnabled: false
        };
        this.handleToggleMenu = this.handleToggleMenu.bind(this);
    }

    handleToggleMenu() {
        const sidebarEnabled = !this.state.sidebarEnabled;
        document.getElementById("root").style.position = sidebarEnabled ? "fixed" : "static";
        document.getElementById("root").style.overflowY = sidebarEnabled ? "hidden" : "auto";
        this.setState({sidebarEnabled});
    }

    render() {
        const { sidebarEnabled } = this.state;
        return (
            <div className={`mob-navbar`}>
                <NavItem url={whatsapp} link={`whatsapp://send?text=`} />
                <NavItem url={call} link={`tel:+73832090697`} />
                <NavItem url={search} link={`#`} />
                <NavItem url={hamburger} link={`#`} handle={this.handleToggleMenu} />
                <Sidebar
                    handleToggleMenu={this.handleToggleMenu}
                    sidebarEnabled={sidebarEnabled}/>
            </div>
        );
    }
}

export default Navigation;


// const Nav = styled.ul`
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -ms-flex-direction: row;
//     -webkit-flex-direction: row;
//     flex-direction: row;
//     width: 100%;
//     align-items: center;
//     -webkit-align-items: center;
//     -webkit-justify-content: flex-end;
//     justify-content: flex-end;
//     list-style-type: none;
// `;