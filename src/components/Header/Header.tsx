import React, { useEffect, useState } from "react";

import styles from "./Header.module.scss";
import classNames from "classnames";
import { addWindowEvents, removeWindowEvents } from "../../utils/windowEvents";
import { useDispatch, useSelector } from "react-redux";
import {
    activateSection,
    selectActiveSectionKey,
    selectSections,
    selectSectionsSortedTupleArray,
} from "../../reducers/sectionReducer";
import { scrollToSection } from "../../utils/doScroll";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const sections = useSelector(selectSections);
    const dispatch = useDispatch();

    const activeSectionKey = useSelector(selectActiveSectionKey);

    const sectionsArray = useSelector(selectSectionsSortedTupleArray)

    useEffect(() => {
        const updateSection = (id: string) => {
            if (id !== activeSectionKey) dispatch(activateSection(id));
        };

        const listener = () => {
            if (window.scrollY > 64) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            for (const [key, section] of sectionsArray) {
                if (
                    section.ref?.current &&
                    window.scrollY > section.ref.current?.offsetTop + section.scrollOffset * 1.5
                ) {
                    updateSection(key);
                    break;
                }
            }
        };

        addWindowEvents(["load", "scroll", "resize"], listener);

        return () => {
            removeWindowEvents(["load", "scroll", "resize"], listener);
        };
    }, [activeSectionKey, dispatch, sectionsArray]);

    return (
        <header className={classNames(styles.root, { [styles.scrolled]: isScrolled })}>
            <nav className="container">
                <ul>
                    {Object.entries(sections).map(([id, section]) => (
                        <li key={id} className={classNames({ [styles.active]: section.isActive })}>
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
