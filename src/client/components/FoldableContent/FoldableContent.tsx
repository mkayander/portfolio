import React, { useState } from "react";
import styles from "./FoldableContent.module.scss";
import { ReactComponent as ExpandIcon } from "../ScrollButton/assets/Scroll_Down_Button.component.svg";
import classNames from "classnames";
import { Heading } from "../index";
import DOMPurify from "isomorphic-dompurify";

type TextSectionProps = {
    emoji: string;
    title: string;
    initiallyFolded?: boolean;
    innerHtml?: string;
};

const FoldableContent: React.FC<TextSectionProps> = ({ title, emoji, initiallyFolded, innerHtml, children }) => {
    const [isFolded, setIsFolded] = useState(initiallyFolded);

    const toggle: React.MouseEventHandler = ev => {
        ev.stopPropagation();
        setIsFolded(!isFolded);
    };

    return (
        <div
            className={styles.root}
            onClick={isFolded ? toggle : undefined}
            title={isFolded ? "Развернуть" : "Свернуть"}>
            <div className={styles.header} onClick={toggle}>
                <Heading emoji={emoji} text={title} />
                <hr />
                <button
                    title={isFolded ? "Развернуть" : "Свернуть"}
                    className={classNames({ [styles.folded]: isFolded })}>
                    <ExpandIcon height={42} width={42} className={styles.icon} />
                </button>
            </div>
            <div
                className={classNames(styles.content, {
                    [styles.folded]: isFolded,
                })}
                dangerouslySetInnerHTML={innerHtml && { __html: DOMPurify.sanitize(innerHtml) }}>
                {children}
            </div>
        </div>
    );
};

export default FoldableContent;
