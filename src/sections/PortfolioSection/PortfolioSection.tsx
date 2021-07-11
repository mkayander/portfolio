import React from "react";
import styles from "./PortfolioSection.module.scss";
import { Heading, WorkItem } from "../../components";
import classNames from "classnames";

const mockData = {
    title: "Tour-Up.ru",
    shortDescription: "Туристическое Android Приложение",
    year: 2021,
    description:
        "Это моя выпускная квалификационная работа (диплом), с которой я закончил высшее образование. Создано мобильное приложение с возможностью просмотра туристических маршрутов и следования по ним, с помощью GPS.\n" +
        "Также реализована полноценная серверная часть (Backend & Frontend) c базой данных маршрутов и редактором маршрутов, созданном на React с применением библиотеки карт Leaflet.",
    imageUrl: "https://i.ibb.co/yWgY14q/image-1.png",
    githubUrls: ["https://github.com/mkayander/TouringApp", "https://github.com/mkayander/TouringAndroidApp"],
};

const mockArray = [mockData, mockData, mockData, mockData, mockData];

const PortfolioSection = () => {
    return (
        <section className={styles.root}>
            <svg height="0" width="0">
                <defs>
                    <clipPath
                        id="svgPath"
                        clipPathUnits="objectBoundingBox"
                        transform="scale(0.0006944444444444445, 0.0003436426116838488)">
                        <path d="M-4.64141e-06 2801.5L1.26937e-06 76.4681C1.26937e-06 76.4681 263.998 0.525249 640.498 92.4681C1017 184.411 1440 76.4683 1440 76.4683L1440 2801.5C1440 2801.5 1017 2909.44 640.5 2817.5C264 2725.56 -4.64141e-06 2801.5 -4.64141e-06 2801.5Z" />
                    </clipPath>
                </defs>
            </svg>

            <div className={classNames("container", styles.content)}>
                <Heading emoji="👨‍💻" text="Мои работы" />
                {/*<h3>*/}
                {/*    <Twemoji emoji="👨‍💻" /> Мои работы*/}
                {/*</h3>*/}
                <p>
                    Ниже представлены мои работы и пет-проекты, которыми я занимался с целью изучения технологий,
                    паттернов клиент-серверных систем, ориентируясь на лучшие практики и изучая докумментацию.
                </p>
                {mockArray.map((value, index) => (
                    <WorkItem
                        key={index}
                        title={value.title}
                        shortDescription={value.shortDescription}
                        year={value.year}
                        description={value.description}
                        imageUrl={value.imageUrl}
                        githubUrls={value.githubUrls}
                        reversed={index % 2 !== 0}
                    />
                ))}
            </div>
        </section>
    );
};

export default PortfolioSection;
