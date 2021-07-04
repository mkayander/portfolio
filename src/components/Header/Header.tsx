import React from "react";

import styles from "./Header.module.scss";
import classNames from "classnames";

const navigation = [
    ["introduction", "Начало"],
    ["about-me", "Обо мне"],
    ["projects", "Мои работы"],
    ["contacts", "Контакты"],
];

const Header = () => {
    return (
        <header className={classNames(styles.root, "container")}>
            <nav>
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
