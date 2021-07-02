import React from 'react';

import BgImg from "./assets/Bg_Image_Mask.svg"
import Shape1 from "./assets/Shape_1.svg"
import Shape2 from "./assets/Shape_2.svg"
import styles from "./Introduction.module.scss"
import classNames from "classnames";
import {Button} from "../index";

const Introduction = () => {
    return (
        <section className={styles.root}>
            <div className={classNames(styles.content, "container")}>
                <h5>Привет,</h5>
                <h3>Меня зовут <b>Максим</b></h3>
                <h5>Я начинающий разработчик</h5>
                <h6>Специализируюсь в <b>Frontend | React.JS</b></h6>

                <div className={styles.buttons}>
                    <Button text={"Скачать Резюме"}/>
                    <Button text={"Контакты"} color="primary"/>
                </div>
            </div>
            <img className={styles.bgImage} src={BgImg} alt="Background"/>
            <img className={styles.bgImage} src={Shape1} alt="Background"/>
            <img className={styles.bgImage} src={Shape2} alt="Background"/>
        </section>
    );
};

export default Introduction;
