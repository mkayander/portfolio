import React from "react";
import styles from "./WorkItem.module.scss";
import classNames from "classnames";
import { Button } from "../index";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { Project } from "../../api/models";

type WorkItemProps = {
    item: Project;
    reversed?: boolean;
};

const WorkItem: React.FC<WorkItemProps> = ({
    item: { title, url, subtitle, year, description, imageUrl, githubUrls },
    reversed,
}) => {
    return (
        <div
            className={classNames(styles.root, {
                [styles.reversed]: reversed,
            })}>
            <div className={styles.imageContainer}>
                {imageUrl && (
                    <Image
                        className={styles.image}
                        src={imageUrl}
                        alt={`${title} screenshot`}
                        unoptimized
                        objectFit="contain"
                        objectPosition="top"
                        layout="fill"
                    />
                )}
            </div>
            <div className={styles.content}>
                {url ? (
                    <a href={url} target="_blank" rel="noreferrer">
                        <h5>{title}</h5>
                    </a>
                ) : (
                    <h5>{title}</h5>
                )}
                <h5>{subtitle}</h5>
                <span className={styles.yearChip}>{year}</span>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
                <div className={styles.buttons}>
                    {githubUrls.length > 0 && (
                        <Button color="primary" links={githubUrls} openNewTab={true}>
                            <b>GitHub</b>
                        </Button>
                    )}
                </div>
            </div>
            <hr className={styles.hr} />
        </div>
    );
};

export default WorkItem;
