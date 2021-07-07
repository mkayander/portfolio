import React, { useEffect, useState } from "react";

import styles from "./Header.module.scss";
import classNames from "classnames";
import { addWindowEvents, removeWindowEvents } from "../../utils/windowEvents";

const navigation = [
    ["introduction", "Начало"],
    ["about-me", "Обо мне"],
    ["projects", "Мои работы"],
    ["contacts", "Контакты"],
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const listener = () => {
            if (window.scrollY > 64) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        addWindowEvents(["load", "scroll", "resize"], listener);

        return () => {
            removeWindowEvents(["load", "scroll", "resize"], listener);
        };
    }, []);

    return (
        <header className={classNames(styles.root, { [styles.scrolled]: isScrolled })}>
            <nav className="container">
                <ul>
                    {navigation.map(([id, name]) => (
                        <li key={id} className={classNames({ [styles.active]: id === "introduction" })}>
                            <a href={`#${id}`}>{name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
