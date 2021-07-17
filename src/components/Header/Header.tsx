import React, { useEffect, useState } from "react";

import styles from "./Header.module.scss";
import classNames from "classnames";
import { addWindowEvents, removeWindowEvents } from "../../utils/windowEvents";
import { useDispatch, useSelector } from "react-redux";
import { activateSection, selectActiveSectionKey, selectSectionsSortedTupleArray } from "../../reducers/sectionReducer";
import { scrollToSection } from "../../utils/doScroll";
import Logo from "./assets/logo-1.1.svg";
import ButtonIcon from "./assets/Menu_Icon_1.svg";
import styled from "styled-components";

const smWidth = 767.98;

const Overlay = styled.div<{ isActive: boolean }>`
    transition: 0.3s;
    z-index: 100;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: black;
    opacity: ${({ isActive }) => (isActive ? "0.5" : "0")};
    pointer-events: ${({ isActive }) => (isActive ? "auto" : "none")};
`;

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpened, setIsSidebarOpened] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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

            const thinnerThanSm = window.innerWidth < smWidth;
            if (thinnerThanSm !== isMobile) setIsMobile(thinnerThanSm);

            for (const [key, section] of sectionEntriesReversed) {
                if (
                    section.ref?.current &&
                    window.scrollY > section.ref.current?.offsetTop + section.scrollOffset * 5
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
    }, [activeSectionKey, dispatch, isMobile, sectionEntries]);

    const renderLinksList = () => (
        <ul className={styles.linksList}>
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
    );

    return (
        <>
            <header className={classNames(styles.root, { [styles.scrolled]: isScrolled })}>
                <div className={classNames(styles.content, "container")}>
                    <a className={styles.brand} href={window.location.href}>
                        <img src={Logo} alt="Logo" />
                    </a>
                    <nav>
                        <button className={styles.navButton} onClick={() => setIsSidebarOpened(!isSidebarOpened)}>
                            <img src={ButtonIcon} alt="Navigation" />
                        </button>
                        {!isMobile && renderLinksList()}
                    </nav>
                </div>
            </header>

            <Overlay isActive={isMobile && isSidebarOpened} onClick={() => setIsSidebarOpened(false)} />

            <div className={classNames(styles.sideBar, { [styles.hidden]: !isSidebarOpened })}>
                {/*{renderLinksList()}*/}
            </div>
        </>
    );
};

export default Header;
