import React, { useState } from "react";
import styles from "./FoldableContent.module.scss";
import ExpandIcon from "../ScrollButton/assets/Scroll_Down_Button.svg";
import classNames from "classnames";
import { Heading } from "../index";
// import ExpandIcon from "./assets/Expand_Button_1.svg";

type TextSectionProps = {
    title: string;
    emoji: string;
    foldable?: boolean;
    initiallyFolded?: boolean;
};

const FoldableContent: React.FC<TextSectionProps> = ({ title, emoji, children }) => {
    const [isFolded, setIsFolded] = useState(false);

    return (
        <div className={styles.root}>
            <div className={styles.header} onClick={() => setIsFolded(!isFolded)}>
                <Heading emoji={emoji} text={title} />
                <hr />
                <button
                    title={isFolded ? "Развернуть" : "Свернуть"}
                    className={classNames({ [styles.folded]: isFolded })}>
                    <img src={ExpandIcon} alt="Expand" />
                </button>
            </div>
            <div className={classNames(styles.content, { [styles.folded]: isFolded })}>{children}</div>
        </div>
    );
};

export default FoldableContent;
