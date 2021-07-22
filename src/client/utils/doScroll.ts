import React from "react";
import { Section } from "../reducers/sectionReducer";

const doScroll = (ref?: React.RefObject<HTMLElement>, offset: number = -128) => {
    ref?.current &&
        window.scroll({
            behavior: "smooth",
            top: ref.current.offsetTop + offset,
        });
};

export const scrollToSection = (section?: Section) => {
    section && doScroll(section.ref, section.scrollOffset);
};

export default doScroll;
