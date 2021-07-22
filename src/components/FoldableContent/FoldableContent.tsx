import React, { useState } from "react";
import styles from "./FoldableContent.module.scss";
import { ReactComponent as ExpandIcon } from "../ScrollButton/assets/Scroll_Down_Button.component.svg";
import classNames from "classnames";
import { Heading } from "../index";

type TextSectionProps = {
    emoji: string;
    title: string;
    initiallyFolded?: boolean;
};

const FoldableContent: React.FC<TextSectionProps> = ({ title, emoji, initiallyFolded, children }) => {
    const [isFolded, setIsFolded] = useState(initiallyFolded);

    return (
        <div className={styles.root}>
            <div className={styles.header} onClick={() => setIsFolded(!isFolded)}>
                <Heading emoji={emoji} text={title} />
                <hr />
                <button
                    title={isFolded ? "Развернуть" : "Свернуть"}
                    className={classNames({ [styles.folded]: isFolded })}>
                    <ExpandIcon height={42} width={42} className={styles.icon} />
                </button>
            </div>
            <div className={classNames(styles.content, { [styles.folded]: isFolded })}>{children}</div>
        </div>
    );
};

export default FoldableContent;
