import React from "react";
// import styled from "styled-components";


export const NavDropList = props => {
    return (
        <ul className={`nav-drop-list`}>
            { props.children }
        </ul>
    );
};

export default NavDropList;

// const DropMenu = styled.ul`
//     display: block;
//     list-style-type: none;
// `;
//
//
// const DropItem = styled.li`
//     text-align: center;
//     a {
//         font-family: PFAgoraSlabPro;
//         font-size: 16px;
//         color: #ffffff;
//     }
// `;