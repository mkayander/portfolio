import React from "react";
import styles from "./Footer.module.scss";
import Shape from "./assets/Footer_Shape.svg";
import Image from "next/image";

const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...rest }) => {
    return (
        <footer className={styles.root} {...rest}>
            <Image className={styles.shape} src={Shape} layout="fill" alt="Shape" />
            <div className={styles.content}>
                <h5>Спасибо за уделённое время!</h5>
            </div>
        </footer>
    );
};

export default Footer;
