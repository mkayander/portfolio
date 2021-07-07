import React from "react";
import styles from "./WorkItem.module.scss";
import classNames from "classnames";
import { Button } from "../index";

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
            <img src={imageUrl} alt="My work screenshot" />
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
        </div>
    );
};

export default WorkItem;
