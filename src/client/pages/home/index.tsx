import React, { useEffect } from "react";
import styles from "./HomePage.module.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Footer, Header } from "../../components";
import { AboutMeSection, ContactsSection, Introduction, PortfolioSection } from "../../sections";
import { useSelector } from "react-redux";
import { Section, selectSections } from "../../reducers/sectionReducer";
import landingNavigation from "../../landingNavigation";
import { scrollToSection } from "../../utils/doScroll";
import Link from "next/link";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { Project } from "../../api/models";
import { fetchProjects } from "../../api";

type HomePageProps = {
    projects?: Project[];
};

const HomePage: NextPage<HomePageProps> = ({ projects }) => {
    const sectionsMap = useSelector(selectSections) as Record<keyof typeof landingNavigation, Section>;

    const withSectionRef = <T extends object>(
        id: keyof typeof sectionsMap,
        Component: React.ForwardRefExoticComponent<T>
    ) => {
        const fc = (props: T) => <Component id={id} ref={sectionsMap[id]?.ref} {...props} />;
        fc.displayName = `Section${id.toUpperCase()}`;
        return fc;
    };

    useEffect(() => {
        let handler = () => {};

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
            <Head>
                <title>Max Kayander</title>
            </Head>

            <Header />
            <main>
                {withSectionRef("introduction", Introduction)({ nextSection: sectionsMap["aboutMe"] })}

                <Link href="/test">
                    <a>test</a>
                </Link>

                {withSectionRef("aboutMe", AboutMeSection)({})}

                {withSectionRef("portfolio", PortfolioSection)({ projects })}

                {withSectionRef("contacts", ContactsSection)({})}
            </main>
            <Footer style={{ zIndex: 10 }} />
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    console.log("Hello from server! I am fetching projects for you...");

    const props = {};
    try {
        props["projects"] = (await fetchProjects()).data;
    } catch (e) {}

    return {
        props,
    };
};

export default HomePage;
