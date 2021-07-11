import React from "react";
import styles from "./ContactsSection.module.scss";
import { Heading } from "../../components";
import WhatsAppIcon from "./assets/Whatsapp_Icon_contact.svg";
import GmailIcon from "./assets/Email_Icon_contact.svg";
import TelegramIcon from "./assets/Telegram_Icon_contact.svg";
import LinkedInIcon from "./assets/LinkedIn_Icon_contact.svg";
import GithubIcon from "./assets/GitHub_Icon_contact.svg";
import VKIcon from "./assets/VK_Icon_contact.svg";
import classNames from "classnames";

type Contact = {
    id: number;
    type: "mobile" | "email" | "url";
    iconUrl: string;
    title: string;
    value: string;
};

const contactsData: Contact[] = [
    { id: 1, type: "mobile", iconUrl: WhatsAppIcon, title: "Мобильный", value: "+7 (977) 491-90-67" },
    { id: 2, type: "email", iconUrl: GmailIcon, title: "Email", value: "maxim.kayander1@gmail.com" },
    { id: 3, type: "url", iconUrl: TelegramIcon, title: "Telegram", value: "https://t.me/mkayander" },
    {
        id: 4,
        type: "url",
        iconUrl: LinkedInIcon,
        title: "LinkedIn",
        value: "https://www.linkedin.com/in/max-kayander-54a42b211/",
    },
    { id: 5, type: "url", iconUrl: GithubIcon, title: "GitHub", value: "https://github.com/mkayander" },
    { id: 6, type: "url", iconUrl: VKIcon, title: "VK", value: "https://vk.com/mkayander" },
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

const ContactsSection = () => {
    return (
        <section className={styles.root}>
            <div className="container">
                <Heading emoji="🤝" text="Буду рад пообщаться" />

                <div className={styles.card}>
                    {contactsData.map(contact => (
                        <div key={contact.id} className={styles.row}>
                            <div className={classNames("col-3", styles.titleCol)}>
                                <img src={contact.iconUrl} alt="Icon" />
                                <h5>{contact.title}: </h5>
                            </div>
                            <a className={styles.valueCol} href={getContactHref(contact)}>
                                {contact.value}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactsSection;
