import React from "react";
import styles from "./WorkItem.module.scss";
import classNames from "classnames";
import { Button } from "../index";
import Image from "next/image";

type WorkItemProps = {
    title: string;
    shortDescription: string;
    year: number;
    description: string;
    imageUrl: string;
    githubUrls: Array<string>;
    reversed?: boolean;
};

const WorkItem: React.FC<WorkItemProps> = ({
    title,
    shortDescription,
    year,
    description,
    imageUrl,
    githubUrls,
    reversed,
}) => {
    return (
        <div className={classNames(styles.root, { [styles.reversed]: reversed })}>
            <Image src={imageUrl} alt="My work screenshot" layout="fill" />
            <div className={styles.content}>
                <h5>{title}</h5>
                <h5>{shortDescription}</h5>
                <span className={styles.yearChip}>{year}</span>
                <p>{description}</p>
                <div className={styles.buttons}>
                    <Button text="Подробнее" />
                    <Button
                        text="GitHub"
                        color="primary"
                        onClick={() => window.open(githubUrls[0], "_blank")?.focus()}
                    />
                </div>
            </div>
            <hr className={styles.hr} />
        </div>
    );
};

export default WorkItem;
