import React from "react";

export type Section = {
    // id: string;
    isActive: boolean;
    index: number;
    displayName: string;
    ref: React.RefObject<HTMLDivElement>;
    scrollOffset: number;
};

export type SectionsState = Record<string, Section>;

enum SectionActionType {
    ADD,
    REMOVE,
    ACTIVATE,
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

type ActivateSectionAction = {
    type: SectionActionType.ACTIVATE;
    id: string;
};

type SectionReducerActions = AddAction | RemoveAction | ActivateSectionAction;

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

        case SectionActionType.ACTIVATE:
            const newState: SectionsState = Object.assign({}, state);
            Object.keys(newState).forEach(key => {
                newState[key].isActive = key === action.id;
            });
            return newState;

        default:
            return state;
    }
};

/*
    Actions
 */
export const activateSection = (id: string): ActivateSectionAction => ({
    type: SectionActionType.ACTIVATE,
    id,
});

export const addSection = (id: string, section: Section): AddAction => ({
    type: SectionActionType.ADD,
    id,
    payload: section,
});

export const removeSectionAt = (id: string): RemoveAction => ({
    type: SectionActionType.REMOVE,
    id,
});

/*
    Selectors
 */
type SectionsSelector<T> = { (state: { sections: SectionsState }): T };

export const selectSections: SectionsSelector<SectionsState> = (state): SectionsState => state.sections;

export const selectSectionsSortedTupleArray: SectionsSelector<Array<[string, Section]>> = (state: {
    sections: SectionsState;
}) => {
    console.log("selectSectionsSortedTupleArray called!");
    return Object.entries(state.sections)
        .sort((a, b) => a[1].index - b[1].index)
};

export const selectActiveSectionKey: SectionsSelector<string | undefined> = state =>
    Object.keys(state.sections).find(key => state.sections[key].isActive);

export default sectionReducer;
