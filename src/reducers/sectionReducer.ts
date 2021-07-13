import React from "react";

export type Section = {
    // id: string;
    displayName: string;
    ref: React.RefObject<HTMLDivElement>;
    scrollOffset: number;
};

export type SectionsState = Record<string, Section>;

enum SectionActionType {
    ADD,
    REMOVE,
}

type AddAction = {
    type: SectionActionType.ADD;
    id: string;
    payload: Section;
};

type RemoveAction = {
    type: SectionActionType.REMOVE;
    id: string;
};

type SectionReducerActions = AddAction | RemoveAction;

const sectionReducer = (state: SectionsState = {}, action: SectionReducerActions) => {
    switch (action.type) {
        case SectionActionType.ADD:
            if (action.id in state) {
                console.log(`${action.id} section is already added. Aborting.`);
                return state;
            }
            return {
                ...state,
                [action.id]: action.payload,
            };

        case SectionActionType.REMOVE:
            return {
                ...state,
                [action.id]: undefined,
            };

        default:
            return state;
    }
};

export const addSection = (id: string, section: Section): AddAction => ({
    type: SectionActionType.ADD,
    id,
    payload: section,
});

export const removeSectionAt = (id: string): RemoveAction => ({
    type: SectionActionType.REMOVE,
    id,
});

export const selectSections = (state: any): SectionsState => state.sections;

export default sectionReducer;
