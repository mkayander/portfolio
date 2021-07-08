import React from "react";
import styles from "./ContactsSection.module.scss";
import { Heading } from "../../components";
import WhatsAppIcon from "./assets/Whatsapp_Icon_contact.svg";
import GmailIcon from "./assets/Email_Icon_contact.svg";
import TelegramIcon from "./assets/Telegram_Icon_contact.svg";

type Contact = {
    type: "mobile" | "email" | "url";
    iconUrl: string;
    title: string;
    value: string;
};

const contactsData: Contact[] = [
    { type: "mobile", iconUrl: WhatsAppIcon, title: "Мобильный", value: "+7 (977) 491-90-67" },
    { type: "email", iconUrl: GmailIcon, title: "Email", value: "maxim.kayander1@gmail.com" },
    { type: "url", iconUrl: TelegramIcon, title: "Telegram", value: "https://t.me/mkayander" },
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
                        <div className={styles.row}>
                            <img src={contact.iconUrl} alt="Icon" />
                            <h5>{contact.title}: </h5>
                            <a href={getContactHref(contact)}>{contact.value}</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactsSection;
