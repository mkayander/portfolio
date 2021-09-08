import { Dispatch } from "redux";
import { fetchCVUrl } from "../api";

type CvInfoState = {
    url?: string;
};

const initialState: CvInfoState = {
    url: undefined,
};

enum CvInfoActionType {
    SET_URL = "SET_URL",
}

type SetUrlAction = {
    type: CvInfoActionType.SET_URL;
    payload: string;
};

type CvInfoReducerActions = SetUrlAction;

const cvInfoReducer = (state: CvInfoState = initialState, action: CvInfoReducerActions) => {
    switch (action.type) {
        case CvInfoActionType.SET_URL:
            return { url: action.payload, ...state };
        default:
            return state;
    }
};

/*
    Dispatches
*/
export const setUrlAction = (url: string) => ({
    type: CvInfoActionType.SET_URL,
    payload: url,
});

export const fetchCvInfoAndDispatch = async (dispatch: Dispatch<CvInfoReducerActions>) => {
    const response = await fetchCVUrl();
    console.log("Dispatching result - ", response.data);
    dispatch(setUrlAction(response.data.relativeUrl));
};

/*
    Selectors
*/
type CvInfoSelector<T> = { (state: { cvInfo: CvInfoState }): T };

export const selectCvInfo: CvInfoSelector<CvInfoState> = state => state.cvInfo;

export default cvInfoReducer;
