import React from "react";
import styles from "./WorksSection.module.scss";

const WorksSection = () => {
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
        </section>
    );
};

export default WorksSection;
