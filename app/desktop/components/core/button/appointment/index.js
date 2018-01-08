import React from "react"
import "./style.scss";


export const AppointmentButton = props => {
    return (
        <a className={`appointment-button`} href={`http://luxmedica.ru/appointment`}>Записаться на прием</a>
    );
};

export default AppointmentButton;