import React, { useEffect } from "react";
import styles from "./HomePage.module.scss";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Footer, Header } from "../../components";
import { AboutMeSection, ContactsSection, Introduction, PortfolioSection } from "../../sections";
import { useSelector } from "react-redux";
import { Section, selectSections } from "../../reducers/sectionReducer";
import landingNavigation from "../../landingNavigation";
import { scrollToSection } from "../../utils/doScroll";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { Contact, InfoSection, Project } from "../../api/models";
import { fetchContactsLocally, fetchInfoSectionsLocally, fetchProjectsLocally } from "../../api";
import { AxiosResponse } from "axios";

type HomePageProps = {
    projects?: Project[];
    contacts?: Contact[];
    infoSections?: InfoSection[];
};

const HomePage: NextPage<HomePageProps> = ({ projects, contacts, infoSections }) => {
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

                {withSectionRef("aboutMe", AboutMeSection)({ infoSections })}

                {withSectionRef("portfolio", PortfolioSection)({ projects })}

                {withSectionRef("contacts", ContactsSection)({ contacts })}
            </main>
            <Footer style={{ zIndex: 10 }} />
        </div>
    );
};

type PropRequest = {
    name: keyof HomePageProps;
    request: () => Promise<AxiosResponse>;
};
const propRequests: PropRequest[] = [
    { name: "projects", request: fetchProjectsLocally },
    { name: "contacts", request: fetchContactsLocally },
    { name: "infoSections", request: fetchInfoSectionsLocally },
];

export const getServerSideProps: GetServerSideProps = async () => {
    const props = {};

    (await Promise.allSettled(propRequests.map(value => value.request()))).forEach((request, index) => {
        if (request.status !== "rejected") {
            props[propRequests[index].name] = request.value.data;
        }
    });

    return {
        props,
    };
};

export default HomePage;
