import React, { useState } from "react";
import styles from "./ContentSection.module.scss";
import ExpandIcon from "../ScrollButton/assets/Scroll_Down_Button.svg";
import Twemoji from "../Twemoji/Twemoji";
import classNames from "classnames";
// import ExpandIcon from "./assets/Expand_Button_1.svg";

type TextSectionProps = {
    title: string;
    emoji: string;
    foldable?: boolean;
    initiallyFolded?: boolean;
};

const ContentSection: React.FC<TextSectionProps> = ({ title, emoji, children }) => {
    const [isFolded, setIsFolded] = useState(false);

    return (
        <div className={styles.root}>
            <div className={styles.header} onClick={() => setIsFolded(!isFolded)}>
                <h3>
                    <Twemoji emoji={emoji} />
                    {" " + title}
                </h3>
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

export default ContentSection;
