import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./ScrollButton.module.scss";
import ScrollIcon from "../../sections/Introduction/assets/Scroll_Down_Button.svg";
import { addWindowEvents, removeWindowEvents } from "../../utils/windowEvents";

const scrollButtonOffset = 160;

enum ScrollButtonState {
    fixed = "fixed",
    relative = "relative",
}

type ScrollButtonProps = {
    containerRef: React.RefObject<HTMLImageElement>;
};

const ScrollButton: React.FC<React.HTMLAttributes<HTMLButtonElement> & ScrollButtonProps> = ({
    containerRef,
    ...rest
}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [scrollButtonState, setScrollButtonState] = useState(ScrollButtonState.fixed);

    useEffect(() => {
        const listener = () => {
            if (containerRef?.current && buttonRef?.current) {
                if (window.getComputedStyle(buttonRef.current).opacity === "0") return;

                switch (scrollButtonState) {
                    case ScrollButtonState.fixed:
                        if (
                            containerRef.current.height - scrollButtonOffset < buttonRef.current.offsetTop ||
                            containerRef.current.height - window.scrollY - scrollButtonOffset <
                                buttonRef.current.offsetTop
                        ) {
                            setScrollButtonState(ScrollButtonState.relative);
                        }
                        break;

                    case ScrollButtonState.relative:
                        if (window.innerHeight > containerRef.current.height) return;
                        if (window.innerHeight + window.scrollY - scrollButtonOffset / 3 < buttonRef?.current?.offsetTop) {
                            console.log(window.innerHeight);
                            console.log(window.scrollY);
                            console.log(buttonRef?.current?.offsetTop);
                            setScrollButtonState(ScrollButtonState.fixed);
                            console.log("Make button fixed!");
                        }
                        break;
                }
            }
        };

        addWindowEvents(["scroll", "resize", "load"], listener);

        return () => {
            removeWindowEvents(["scroll", "resize", "load"], listener);
        };
    }, [scrollButtonState, containerRef]);

    return (
        <button ref={buttonRef} className={classNames(styles.root, styles[scrollButtonState])} {...rest}>
            <img src={ScrollIcon} alt="Scroll Down" />
        </button>
    );
};

export default ScrollButton;
