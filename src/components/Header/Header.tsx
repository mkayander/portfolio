import React, { useEffect, useState } from "react";

import styles from "./Header.module.scss";
import classNames from "classnames";
import { addWindowEvents, removeWindowEvents } from "../../utils/windowEvents";
import { useSelector } from "react-redux";
import { selectSections } from "../../reducers/sectionReducer";
import { scrollToSection } from "../../utils/doScroll";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const sections = useSelector(selectSections);

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
                    {Object.entries(sections).map(([id, section]) => (
                        <li key={id} className={classNames({ [styles.active]: id === "introduction" })}>
                            <a
                                href={`#${id}`}
                                onClick={event => {
                                    event.preventDefault();
                                    scrollToSection(section);
                                }}>
                                {section.displayName}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
