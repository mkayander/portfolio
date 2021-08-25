import React from "react";
import styles from "./WorkItem.module.scss";
import classNames from "classnames";
import { Button } from "../index";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import resolveResourceUrl from "../../utils/resolveResourceUrl";

type WorkItemProps = {
    title: string;
    shortDescription: string;
    year: number;
    description: string;
    imageUrl?: string;
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
        <div
            className={classNames(styles.root, {
                [styles.reversed]: reversed,
            })}>
            <div className={styles.imageContainer}>
                {imageUrl && (
                    <Image
                        className={styles.image}
                        src={resolveResourceUrl(imageUrl)}
                        alt="My work screenshot"
                        objectFit="contain"
                        objectPosition="top"
                        // quality={100}
                        // sizes="100vw"
                        // height={400}
                        // width={700}
                        layout="fill"
                    />
                )}
            </div>
            <div className={styles.content}>
                <h5>{title}</h5>
                <h5>{shortDescription}</h5>
                <span className={styles.yearChip}>{year}</span>
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} />
                <div className={styles.buttons}>
                    {githubUrls.length > 0 && (
                        <Button color="primary" link={githubUrls[0]} openNewTab={true}>
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
