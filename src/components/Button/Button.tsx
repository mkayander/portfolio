import React from 'react';

import styles from "./Button.module.scss"
import classNames from "classnames";

type ButtonProps = {
    text?: string,
    color?: "accent" | "primary"
}

const Button: React.FC<React.HTMLAttributes<HTMLButtonElement> & ButtonProps> = ({text, color = "accent", ...rest}) => {
    return (
        <button className={classNames(styles.root, styles[color])} {...rest}>
            {text && <span>{text}</span>}
        </button>
    );
};

export default Button;
