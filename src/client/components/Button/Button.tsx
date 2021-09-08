import React, { useRef } from "react";

import styles from "./Button.module.scss";
import classNames from "classnames";
import { Dropdown } from "../index";

type ButtonProps = {
    text?: string;
    color?: "accent" | "primary";
    onClick?: React.MouseEventHandler;
    links?: Array<{
        _id?: string;
        name?: string;
        url: string;
    }>;
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
    const Tag = linksCount ? "a" : "button";

    return (
        <>
            <Tag
                ref={ref}
                disabled={disabled}
                title={title}
                className={classNames(styles.root, styles[color], { [styles.disabled]: disabled })}
                href={isSingleLink ? links[0].url : undefined}
                target={isSingleLink && openNewTab ? "_blank" : undefined}
                rel={isSingleLink && openNewTab ? "noreferrer" : undefined}
                onClick={onClick}>
                {text && <span>{text}</span>}
                {children}
            </Tag>

            {linksCount && !isSingleLink && (
                <Dropdown referenceRef={ref}>
                    {links.map(item => (
                        <li key={item._id || item.url}>
                            <a href={item.url} target={openNewTab && "_blank"} rel={openNewTab && "noreferrer"}>
                                {item.name || item.url}
                            </a>
                        </li>
                    ))}
                </Dropdown>
            )}
        </>
    );
};

export default Button;
