import React, { useEffect, useRef, useState } from "react";

import BgImg from "./assets/Bg_Image_Mask.svg";
import Shape1 from "./assets/Shape_1.svg";
import Shape2 from "./assets/Shape_2.svg";
import ScrollIcon from "./assets/Scroll_Down_Button.svg";
import styles from "./Introduction.module.scss";
import classNames from "classnames";
import { Button } from "../index";
import { addWindowEvents, removeWindowEvents } from "../../utils/windowEvents";

enum ScrollButtonState {
    fixed = "fixed",
    relative = "relative",
}

const scrollButtonOffset = 160;

const Introduction: React.FC = () => {
    const bgRef = useRef<HTMLImageElement>(null);
    const buttonScrollRef = useRef<HTMLButtonElement>(null);

    const [scrollButtonState, setScrollButtonState] = useState(ScrollButtonState.fixed);

    useEffect(() => {
        const listener = () => {
            if (bgRef?.current && buttonScrollRef?.current) {
                if (window.getComputedStyle(buttonScrollRef.current).display === "none") return;

                switch (scrollButtonState) {
                    case ScrollButtonState.fixed:
                        if (
                            bgRef.current.height - scrollButtonOffset < buttonScrollRef.current.offsetTop ||
                            bgRef.current.height - window.scrollY - scrollButtonOffset <
                                buttonScrollRef.current.offsetTop
                        ) {
                            // console.log("Make button position: relative");
                            setScrollButtonState(ScrollButtonState.relative);
                        }

                        break;

                    case ScrollButtonState.relative:
                        if (window.innerHeight > bgRef.current.height) return;
                        if (window.innerHeight + window.scrollY < buttonScrollRef?.current?.offsetTop) {
                            console.log(window.innerHeight);
                            console.log(window.scrollY);
                            console.log(buttonScrollRef?.current?.offsetTop);
                            setScrollButtonState(ScrollButtonState.fixed);
                            console.log("Make button fixed!");
                        }
                        break;
                }
            }
        };

        addWindowEvents(["scroll", "resize"], listener);
        listener();

        return () => {
            removeWindowEvents(["scroll", "resize"], listener);
        };
    }, [scrollButtonState]);

    return (
        <section className={styles.root}>
            <div className={classNames(styles.content, "container")}>
                <div className={styles.card}>
                    <h5>Привет,</h5>
                    <h3>
                        Меня зовут <b>Максим</b>
                    </h3>
                    <h5>Я начинающий разработчик</h5>
                    <h6>
                        Специализируюсь в <b>Frontend | React.JS</b>
                    </h6>
                    <div className={styles.buttons}>
                        <Button text={"Скачать Резюме"} />
                        <Button text={"Контакты"} color="primary" />
                    </div>
                </div>
            </div>
            <img className={styles.bgImage} src={BgImg} alt="Background" />
            <img className={styles.bgImage} src={Shape1} alt="Background" />
            <img ref={bgRef} className={styles.bgMain} src={Shape2} alt="Background" />
            <button
                ref={buttonScrollRef}
                className={classNames(styles.buttonScroll, styles[scrollButtonState])}
                onClick={event => console.log(event)}>
                <img src={ScrollIcon} alt="Scroll Down" />
            </button>
        </section>
    );
};

export default Introduction;
