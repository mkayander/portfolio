import React from "react";
import styles from "./PortfolioSection.module.scss";
import { Heading, WorkItem } from "../../components";
import classNames from "classnames";
import { createSectionComponent } from "../../components/abstract";
import { Project } from "../../api/models";

type PortfolioSectionProps = {
    projects?: Project[];
};

const PortfolioSection = createSectionComponent<PortfolioSectionProps>(({ id, projects }, ref) => {
    return (
        <section ref={ref} className={styles.root}>
            {/*1/bb.width; 1/bb.height*/}
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
            <svg height="0" width="0">
                <defs>
                    <clipPath
                        id="svgPath2"
                        clipPathUnits="objectBoundingBox"
                        transform="scale(0.0026666666666667, 0.0002918)">
                        <path d="M5.9825e-05 3396.33L7.28664e-05 54.7002C7.28664e-05 54.7002 68.7496 34.9004 166.796 58.8718C264.843 82.8433 375 54.7002 375 54.7002L375 3396.33C375 3396.33 264.844 3424.47 166.797 3400.5C68.7501 3376.53 5.9825e-05 3396.33 5.9825e-05 3396.33Z" />
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
                <div className={styles.worksList}>
                    {projects?.map((value, index) => (
                        <WorkItem key={value._id} item={value} reversed={index % 2 !== 0} />
                    ))}
                </div>
                <br />
                <br />
            </div>
        </section>
    );
});

export default PortfolioSection;
