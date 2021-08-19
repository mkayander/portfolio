import React from "react";

import styles from "./Button.module.scss";
import classNames from "classnames";

type ButtonProps = {
    text?: string;
    color?: "accent" | "primary";
    onClick?: React.MouseEventHandler;
    link?: string;
    // Adds 'target="_blank"' and 'rel="noreferrer"' attributes to anchor element if 'link' prop is specified.
    openNewTab?: boolean;
};

/**
 * If URL is passed to the 'link' argument, the button would be rendered as <a/> tag with specified href.
 */
const Button: React.FC<ButtonProps> = ({ text, color = "accent", onClick, link, openNewTab }) => {
    const Tag = link === undefined ? "button" : "a";

    return (
        <Tag
            className={classNames(styles.root, styles[color])}
            href={link}
            target={link && openNewTab && "_blank"}
            rel={link && openNewTab && "noreferrer"}
            onClick={onClick}>
            {text && <span>{text}</span>}
        </Tag>
    );
};

export default Button;
