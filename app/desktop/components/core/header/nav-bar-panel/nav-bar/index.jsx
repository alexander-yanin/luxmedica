import React from "react";
// import styled from "styled-components";

import "./style.scss";
import NavItem from "./nav-item";
import NavDropList from "./nav-drop-list";
import NavDropItem from "./nav-drop-item";


export class Navbar extends React.Component {
    render() {
        return (
            <ul className={`nav-bar`}>
                <NavItem text={`Услуги`}
                            link={`#`}>
                    <NavDropList>
                        <NavDropItem text={`Стоимость`}
                                      link={`http://luxmedica.ru/service`}/>
                        <NavDropItem text={`Акции`}
                                      link={`/about/shares`} reactLink={true}/>
                    </NavDropList>
                </NavItem>
                <NavItem text={`Врачи`}
                            link={`http://luxmedica.ru/doctor`}/>
                <NavItem text={`О нас`}
                            link={`#`}>
                    <NavDropList>
                        <NavDropItem text={`Преимущества`}
                                      link={`http://luxmedica.ru/news/view?id=46`}/>
                        <NavDropItem text={`Новости`}
                                      link={`http://luxmedica.ru/news`}/>
                    </NavDropList>
                </NavItem>
                <NavItem text={`Контакты`}
                            link={`/contacts`} reactLink={true}/>
            </ul>
        );
    }
}

export default Navbar;
//
// const Navigation = styled.ul`
//     margin-left: 105px;
//     list-style-type: none;
//     display: -webkit-box;
//     display: -moz-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: row;
//     -ms-flex-direction: row;
//     flex-direction: row;
//     align-items: center;
// `;