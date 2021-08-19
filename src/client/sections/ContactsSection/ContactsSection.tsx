import React, { useEffect, useState } from "react";
import styles from "./ContactsSection.module.scss";
import { Heading } from "../../components";
import classNames from "classnames";
import calculateMouseTranslation, { MousePos } from "../../utils/calculateMouseTranslation";
import { createSectionComponent } from "../../components/abstract";
import Image from "next/image";
import { Contact } from "../../api/models";
import resolveResourceUrl from "../../utils/resolveResourceUrl";

const getContactHref = (contact: Contact) => {
    switch (contact.type) {
        case "email":
            return `mailto:${contact.value}`;
        case "mobile":
            return `tel:${contact.value}`;
        default:
        case "url":
            return contact.value;
    }
};

type ContactsSectionProps = {
    contacts: Contact[];
};

const ContactsSection = createSectionComponent<ContactsSectionProps>(({ id, contacts }, ref) => {
    const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });

    useEffect(() => {
        const listener = (ev: MouseEvent) => {
            setMousePos({ x: ev.screenX, y: ev.screenY });
        };
        window.addEventListener("mousemove", listener);
        return () => {
            window.removeEventListener("mousemove", listener);
        };
    }, []);

    return (
        <section ref={ref} className={styles.root}>
            <div className="container">
                <Heading className={styles.heading} emoji="🤝" text="Буду рад пообщаться" />

                <div className={styles.bigCircleContainer}>
                    <div
                        className={styles.bigCircle}
                        style={{
                            transform: calculateMouseTranslation(mousePos, -0.02),
                        }}
                    />
                </div>
                <div className={styles.smallCircleContainer}>
                    <div
                        className={styles.smallCircle}
                        style={{
                            transform: calculateMouseTranslation(mousePos, 0.04),
                        }}
                    />
                </div>

                <div className={styles.card}>
                    {contacts?.map(contact => (
                        <div key={contact.id} className={styles.row}>
                            <div className={classNames("col-3", styles.titleCol)}>
                                <div className={styles.iconContainer}>
                                    {contact.iconUrl && (
                                        <Image src={resolveResourceUrl(contact.iconUrl)} alt="Icon" layout="fill" />
                                    )}
                                </div>
                                <h5>{contact.title}: </h5>
                            </div>
                            <div className={styles.valueCol}>
                                <a
                                    href={getContactHref(contact)}
                                    target={contact.type === "url" ? "_blank" : undefined}
                                    rel="noreferrer">
                                    {contact.value}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default ContactsSection;
