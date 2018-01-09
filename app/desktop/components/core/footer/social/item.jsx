import React from "react";


export const SocialItem = props => {
    return (
        <a className={`footer-social-link`} target={`_blank`} href={props.href}><img className={`footer-social-icon`} src={props.icon} alt={props.alt || ""}/></a>
    );
};

export default SocialItem;