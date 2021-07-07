import React from "react";
import styles from "./ContactsSection.module.scss";
import { Twemoji } from "../../components";

const ContactsSection = () => {
    return (
        <section className={styles.root}>
            <div className="container">
                <h3>
                    <Twemoji emoji="🤝" /> Буду рад пообщаться
                </h3>

                <div className={styles.card}>

                </div>
            </div>
        </section>
    );
};

export default ContactsSection;
