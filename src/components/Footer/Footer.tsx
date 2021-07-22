import React from "react";
import styles from "./Footer.module.scss";
import { ReactComponent as Shape1 } from "./assets/Footer_Shape.component.svg";

const Footer: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ ...rest }) => {
    return (
        <footer className={styles.root} {...rest}>
            <Shape1 className={styles.shape}/>
            {/*<div className={styles.shapeContainer}>*/}
                {/*<Image*/}
                {/*    className={styles.shape}*/}
                {/*    src={Shape1}*/}
                {/*    objectFit="contain"*/}
                {/*    objectPosition="bottom"*/}
                {/*    // layout="fill"*/}
                {/*    alt="Shape"*/}
                {/*/>*/}
            {/*</div>*/}
            <div className={styles.content}>
                <h5>Спасибо за уделённое время!</h5>
            </div>
        </footer>
    );
};

export default Footer;
