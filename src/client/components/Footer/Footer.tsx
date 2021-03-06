import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as Shape1 } from "./assets/Footer_Shape.component.svg";

const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
    return (
        <footer className={styles.root}>
            <Shape1 className={styles.shape} />

            <div className={styles.content}>
                <h5>Спасибо за уделённое время!</h5>
            </div>
        </footer>
    );
};

export default Footer;
