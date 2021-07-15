import React, { useEffect, useState } from "react";

import styles from "./Header.module.scss";
import classNames from "classnames";
import { addWindowEvents, removeWindowEvents } from "../../utils/windowEvents";
import { useDispatch, useSelector } from "react-redux";
import { activateSection, selectActiveSectionKey, selectSectionsSortedTupleArray } from "../../reducers/sectionReducer";
import { scrollToSection } from "../../utils/doScroll";
import Logo from "./assets/logo-1.1.svg";

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const dispatch = useDispatch();

    const activeSectionKey = useSelector(selectActiveSectionKey);

    const sectionEntries = useSelector(selectSectionsSortedTupleArray);

    useEffect(() => {
        const updateSection = (id: string) => {
            if (id !== activeSectionKey) dispatch(activateSection(id));
        };

        const sectionEntriesReversed = [...sectionEntries].reverse(); // .reverse() method is mutable

        const listener = () => {
            if (window.scrollY > 64) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            for (const [key, section] of sectionEntriesReversed) {
                if (
                    section.ref?.current &&
                    window.scrollY > section.ref.current?.offsetTop + section.scrollOffset * 2
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
    }, [activeSectionKey, dispatch, sectionEntries]);

    return (
        <header className={classNames(styles.root, { [styles.scrolled]: isScrolled })}>
            <div className={classNames(styles.content, "container")}>
                <a className={styles.brand} href={window.location.href}>
                    <img src={Logo} alt="Logo" />
                </a>
                <nav>
                    <ul>
                        {sectionEntries.map(([id, section]) => (
                            <li key={id} className={classNames({ [styles.active]: section.isActive })}>
                                <a
                                    href={`#${id}`}
                                    onClick={(ev: React.MouseEvent<HTMLAnchorElement>) => {
                                        ev.preventDefault();
                                        window.history.replaceState({}, "", (ev.target as HTMLAnchorElement).href);
                                        scrollToSection(section);
                                    }}>
                                    {section.displayName}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
