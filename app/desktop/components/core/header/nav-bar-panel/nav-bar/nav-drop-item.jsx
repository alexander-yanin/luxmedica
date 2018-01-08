import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";


export class NavDropItem extends React.Component {
    render() {
        return (
            this.props.reactLink ?
                <li className={`nav-drop-item`}>
                    <Link className={`nav-drop-item__link`} to={`${this.props.link}`}>{ this.props.text }</Link>
                </li> :
                <li className={`nav-drop-item`}><a className={`nav-drop-item__link`} href={`${this.props.link}`}>{ this.props.text }</a></li>
        );
    }
}

export default NavDropItem;

// const DropItem = styled.li`
//     text-align: center;
//     a {
//         font-family: PFAgoraSlabPro;
//         font-size: 16px;
//         color: #b5b5b5;
//         text-decoration: none;
//     }
// `;