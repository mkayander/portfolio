import React from "react";

const landingNavigation = {
    introduction: {
        displayName: "Начало",
        ref: React.createRef<HTMLDivElement>(),
        scrollOffset: 0,
        isActive: true,
        index: 1,
    },
    aboutMe: {
        displayName: "Обо мне",
        ref: React.createRef<HTMLDivElement>(),
        scrollOffset: -128,
        isActive: false,
        index: 2,
    },
    portfolio: {
        displayName: "Портфолио",
        ref: React.createRef<HTMLDivElement>(),
        scrollOffset: -30,
        isActive: false,
        index: 3,
    },
    contacts: {
        displayName: "Контакты",
        ref: React.createRef<HTMLDivElement>(),
        scrollOffset: -100,
        isActive: false,
        index: 4,
    },
} as const;

export default landingNavigation;
