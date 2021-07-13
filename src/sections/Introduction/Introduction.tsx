import React, { useRef } from "react";

import BgImg from "./assets/Bg_Image_Mask.svg";
import Shape1 from "./assets/Shape_1.svg";
import Shape2 from "./assets/Shape_2.svg";
import styles from "./Introduction.module.scss";
import classNames from "classnames";
import { Button, ScrollButton } from "../../components";
import { scrollToSection } from "../../utils/doScroll";
import { Section } from "../../reducers/sectionReducer";

type IntroductionProps = {
    inputRef?: React.RefObject<HTMLDivElement>;
    nextSection?: Section;
};

const Introduction: React.FC<IntroductionProps> = ({ inputRef, nextSection }) => {
    const bgRef = useRef<HTMLImageElement>(null);

    return (
        <section ref={inputRef} className={styles.root}>
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
            <ScrollButton containerRef={bgRef} onClick={() => scrollToSection(nextSection)} />
        </section>
    );
};

export default Introduction;
