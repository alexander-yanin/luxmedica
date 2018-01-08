import React from "react";
// import styled from "styled-components";


export const NavItem = props => {
    return (
        <li className={`nav-item`} style={{backgroundImage: `url(${props.url})`}}>
            <a className={`nav-item__link`}
                href={props.link}
                onClick={props.handle ? props.handle : null}
            />
        </li>
    )
};

export default NavItem;


// const Item = styled.li`
//     margin-left: 24px;
//     width: 20px;
//     height: 20px;
//     -moz-background-image: url(${props => props.url});
//     -o-background-image: url(${props => props.url});
//     -webkit-background-image: url(${props => props.url});
//     background-image: url(${props => props.url});
//     background-repeat: no-repeat;
//     -moz-background-size: contain;
//     -o-background-size: contain;
//     -webkit-background-size: contain;
//     background-size: contain;
//     background-position: center center;
//
// `;
//
// const LinkItem = styled.a`
//     display: block;
//     width: 20px;
//     height: 20px;
//
// `;