import React, { useEffect, useState } from "react";
import styles from "./ContactsSection.module.scss";
import { Heading } from "../../components";
import WhatsAppIcon from "./assets/Whatsapp_Icon_contact.svg";
import GmailIcon from "./assets/Email_Icon_contact.svg";
import TelegramIcon from "./assets/Telegram_Icon_contact.svg";
import LinkedInIcon from "./assets/LinkedIn_Icon_contact.svg";
import GithubIcon from "./assets/GitHub_Icon_contact.svg";
import VKIcon from "./assets/VK_Icon_contact.svg";
import classNames from "classnames";
import calculateMouseTranslation, { MousePos } from "../../utils/calculateMouseTranslation";
import { createSectionComponent } from "../../components/abstract";
import Image from "next/image";

type Contact = {
    id: number;
    type: "mobile" | "email" | "url";
    iconUrl: string;
    title: string;
    value: string;
};

const contactsData: Contact[] = [
    { id: 1, type: "mobile", iconUrl: WhatsAppIcon.src, title: "Мобильный", value: "+7 (977) 491-90-67" },
    { id: 2, type: "email", iconUrl: GmailIcon.src, title: "Email", value: "maxim.kayander1@gmail.com" },
    { id: 3, type: "url", iconUrl: TelegramIcon.src, title: "Telegram", value: "https://t.me/mkayander" },
    {
        id: 4,
        type: "url",
        iconUrl: LinkedInIcon.src,
        title: "LinkedIn",
        value: "https://www.linkedin.com/in/max-kayander-54a42b211/",
    },
    { id: 5, type: "url", iconUrl: GithubIcon.src, title: "GitHub", value: "https://github.com/mkayander" },
    { id: 6, type: "url", iconUrl: VKIcon.src, title: "VK", value: "https://vk.com/mkayander" },
];

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

const ContactsSection = createSectionComponent(({ id }, ref) => {
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
                        style={{ transform: calculateMouseTranslation(mousePos, -0.02) }}
                    />
                </div>
                <div className={styles.smallCircleContainer}>
                    <div
                        className={styles.smallCircle}
                        style={{ transform: calculateMouseTranslation(mousePos, 0.04) }}
                    />
                </div>

                <div className={styles.card}>
                    {contactsData.map(contact => (
                        <div key={contact.id} className={styles.row}>
                            <div className={classNames("col-3", styles.titleCol)}>
                                <div className={styles.iconContainer}>
                                    <Image src={contact.iconUrl} alt="Icon" layout="fill" />
                                </div>
                                <h5>{contact.title}: </h5>
                            </div>
                            <div className={styles.valueCol}>
                                <a href={getContactHref(contact)}>{contact.value}</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default ContactsSection;
