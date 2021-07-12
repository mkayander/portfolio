import React from "react";
import styles from "./Footer.module.scss";
import Shape from "./assets/Footer_Shape.svg";

const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({...rest}) => {
    return (
        <footer className={styles.root} {...rest}>
            <img className={styles.shape} src={Shape} alt="Shape" />
            <div className={styles.content}>
                <h5>Спасибо за уделённое время!</h5>
            </div>
        </footer>
    );
};

export default Footer;
