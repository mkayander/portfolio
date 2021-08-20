import React, { useRef } from "react";

import BgImg from "./assets/Top_Bg_Image.png";
import { ReactComponent as Shape1 } from "./assets/Shape_1.component.svg";
import { ReactComponent as Shape2 } from "./assets/Shape_2.component.svg";
import styles from "./Introduction.module.scss";
import classNames from "classnames";
import { Button, ScrollButton } from "../../components";
import { scrollToSection } from "../../utils/doScroll";
import { Section, selectSections } from "../../reducers/sectionReducer";
import { createSectionComponent } from "../../components/abstract";
import { useSelector } from "react-redux";

type IntroductionProps = {
    nextSection?: Section;
};

const Introduction = createSectionComponent<IntroductionProps>(({ id, nextSection }, ref) => {
    const bgRef = useRef<HTMLDivElement>(null);

    const sections = useSelector(selectSections);

    return (
        <section ref={ref} className={styles.root}>
            <div className={classNames(styles.content, "container")}>
                <div className={styles.card}>
                    <h5>Привет,</h5>
                    <h3>
                        Меня зовут <b>Максим</b>
                    </h3>
                    <h5>Я Web-разработчик</h5>
                    <h6>
                        Специализируюсь в <b>Frontend | React.JS</b>
                    </h6>
                    <div className={styles.buttons}>
                        <Button text={"Скачать Резюме"} link={"/api/v1/portfolio.txt"} />
                        <Button
                            text={"Контакты"}
                            color="primary"
                            onClick={() => scrollToSection(sections["contacts"])}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.bgImage}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 1440 1065">
                    <defs>
                        <clipPath id="a" transform="translate(0 0.07)">
                            <path d="M1440,0V1024s-344-91.94-720.5,0S0,1024,0,1024V0Z" style={{ fill: "none" }} />
                        </clipPath>
                    </defs>
                    <g style={{ clipPath: "url(#a)" }}>
                        <image width="1440" height="1065" xlinkHref={BgImg.src} />
                    </g>
                </svg>
            </div>
            <div className={styles.bgImage}>
                <Shape1 />
            </div>
            <div ref={bgRef} className={styles.bgMain}>
                <Shape2 />
            </div>
            <svg height="0" width="0">
                <defs>
                    {/*1440 1064.86*/}
                    <clipPath
                        id="svgPathTopImage"
                        clipPathUnits="objectBoundingBox"
                        transform="scale(0.0006944444444444445, 0.000939090584677798)">
                        <path d="M1440 0v1024s-344-91.94-720.5 0S0 1024 0 1024V0z" />
                    </clipPath>
                </defs>
            </svg>
            <ScrollButton containerRef={bgRef} onClick={() => scrollToSection(nextSection)} />
        </section>
    );
});

export default Introduction;
