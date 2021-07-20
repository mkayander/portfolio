import React, { useRef } from "react";

import BgImg from "./assets/Bg_Image_Mask.url.svg";
import { ReactComponent as Shape1 } from "./assets/Shape_1.component.svg";
import { ReactComponent as Shape2 } from "./assets/Shape_2.component.svg";
import styles from "./Introduction.module.scss";
import classNames from "classnames";
import { Button, ScrollButton } from "../../components";
import { scrollToSection } from "../../utils/doScroll";
import { Section } from "../../reducers/sectionReducer";
import { createSectionComponent } from "../../components/abstract";
import Image from "next/image";

type IntroductionProps = {
    nextSection?: Section;
};

const Introduction = createSectionComponent<IntroductionProps>(({ id, nextSection }, ref) => {
    const bgRef = useRef<HTMLImageElement>(null);

    return (
        <section ref={ref} className={styles.root}>
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
            <Image className={styles.bgImage} src={BgImg} layout="fill" alt="Background" />
            <Shape1 className={styles.bgImage} />
            {/*<img className={styles.bgImage} src={Shape1} alt="Background" />*/}
            <Shape2 className={styles.bgMain}/>
            {/*<img ref={bgRef} className={styles.bgMain} src={Shape2} alt="Background" />*/}
            <ScrollButton containerRef={bgRef} onClick={() => scrollToSection(nextSection)} />
        </section>
    );
});

export default Introduction;
