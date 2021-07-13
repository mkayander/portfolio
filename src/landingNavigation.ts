import React from "react";

const landingNavigation = {
    introduction: { displayName: "Начало", ref: React.createRef<HTMLDivElement>(), scrollOffset: 0 },
    aboutMe: { displayName: "Обо мне", ref: React.createRef<HTMLDivElement>(), scrollOffset: -128 },
    portfolio: { displayName: "Портфолио", ref: React.createRef<HTMLDivElement>(), scrollOffset: -30 },
    contacts: { displayName: "Контакты", ref: React.createRef<HTMLDivElement>(), scrollOffset: -100 },
} as const;

export default landingNavigation;
