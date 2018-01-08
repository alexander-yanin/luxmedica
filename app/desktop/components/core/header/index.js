import React from "react";
// import styled from "styled-components";
import "./style.scss";

import isMobile from "libs/userAgent";

import InfoPanel from "./info-panel";
import NavBarPanel from "./nav-bar-panel";


export class Header extends React.Component {
    render() {
        return (
            <header>
                { !isMobile.any() ? <InfoPanel infoAll={this.props.infoAll}/> : null }
                <NavBarPanel/>
            </header>
        );
    }
}

export default Header