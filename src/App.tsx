import React, { useEffect } from "react";
import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Footer, Header } from "./components";
import { AboutMeSection, ContactsSection, Introduction, PortfolioSection } from "./sections";
import { useSelector } from "react-redux";
import { Section, selectSections } from "./reducers/sectionReducer";
import landingNavigation from "./landingNavigation";
import { scrollToSection } from "./utils/doScroll";

function App() {
    const sectionsMap = useSelector(selectSections) as Record<keyof typeof landingNavigation, Section>;

    const withSectionRef = <T extends object>(
        id: keyof typeof sectionsMap,
        Component: React.ForwardRefExoticComponent<T>
    ) => {
        return (props: T) => <Component id={id} ref={sectionsMap[id]?.ref} {...props} />;
    };

    useEffect(() => {
        let handler = () => {
        };

        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            handler = () => scrollToSection(sectionsMap[id as keyof typeof landingNavigation]);
            if (id in sectionsMap) {
                window.addEventListener("load", handler);
            }
        }

        return () => {
            window.removeEventListener("load", handler);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.root}>
            <Header />
            <main>
                {withSectionRef("introduction", Introduction)({ nextSection: sectionsMap["aboutMe"] })}

                {withSectionRef("aboutMe", AboutMeSection)({})}

                {withSectionRef("portfolio", PortfolioSection)({})}

                {withSectionRef("contacts", ContactsSection)({})}
            </main>
            <Footer style={{ zIndex: 10 }} />
        </div>
    );
}

export default App;
