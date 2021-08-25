import React, { useRef } from "react";

import styles from "./Button.module.scss";
import classNames from "classnames";
import { Dropdown } from "../index";

type ButtonProps = {
    text?: string;
    color?: "accent" | "primary";
    onClick?: React.MouseEventHandler;
    links?: string[];
    disabled?: boolean;
    title?: string;
    // Adds 'target="_blank"' and 'rel="noreferrer"' attributes to anchor element if 'link' prop is specified.
    openNewTab?: boolean;
};

/**
 * If URL is passed to the 'link' argument, the button would be rendered as <a/> tag with specified href.
 */
const Button: React.FC<ButtonProps> = ({
    text,
    color = "accent",
    onClick,
    links,
    disabled,
    title,
    openNewTab,
    children,
}) => {
    const ref = useRef(null);

    const linksCount: number | undefined = links?.length;
    const isSingleLink = linksCount === 1;
    console.log(linksCount, Boolean(linksCount));
    const Tag = linksCount ? "a" : "button";

    return (
        <>
            <Tag
                ref={ref}
                disabled={disabled}
                title={title}
                className={classNames(styles.root, styles[color])}
                href={isSingleLink ? links[0] : undefined}
                target={isSingleLink && openNewTab ? "_blank" : undefined}
                rel={isSingleLink && openNewTab ? "noreferrer" : undefined}
                onClick={onClick}>
                {text && <span>{text}</span>}
                {children}
            </Tag>

            {linksCount && !isSingleLink && (
                <Dropdown referenceRef={ref}>
                    {links.map(url => (
                        <li key={url}>
                            <a href={url}>{url}</a>
                        </li>
                    ))}
                </Dropdown>
            )}
        </>
    );
};

export default Button;
