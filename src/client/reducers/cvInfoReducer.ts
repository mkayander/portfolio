import { fetchCVUrl } from "../api";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

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
            return { ...state, url: action.payload };
        default:
            return state;
    }
};

/*
    Dispatches
*/
type CvInfoThunk<R = void> = ThunkAction<R, RootState, unknown, CvInfoReducerActions>;

export const setUrlAction = (url: string) => ({
    type: CvInfoActionType.SET_URL,
    payload: url,
});

export const fetchCvInfoAction = (): CvInfoThunk => {
    return async (dispatch, getState) => {
        const response = await fetchCVUrl();
        console.dir(getState());
        dispatch(setUrlAction(response.data.relativeUrl));
    };
};

/*
    Selectors
*/
type CvInfoSelector<T> = { (state: { cvInfo: CvInfoState }): T };

export const selectCvInfo: CvInfoSelector<CvInfoState> = state => state.cvInfo;

export default cvInfoReducer;
