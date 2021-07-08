import React from "react";
import { Twemoji } from "../index";

type HeadingProps = {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    emoji?: string;
    text?: string;
};

const Heading: React.FC<React.HTMLAttributes<HTMLHeadingElement> & HeadingProps> = ({
    variant: Tag = "h3",
    emoji,
    text,
    children,
    ...rest
}) => {
    return (
        <Tag {...rest}>
            {emoji && <Twemoji emoji={emoji} />}
            {text && " " + text} {children}
        </Tag>
    );
};

export default Heading;
