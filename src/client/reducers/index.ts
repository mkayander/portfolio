import { combineReducers } from "redux";
import sectionReducer from "./sectionReducer";
import cvInfoReducer from "./cvInfoReducer";

const rootReducer = combineReducers({
    cvInfo: cvInfoReducer,
    sections: sectionReducer,
});

export default rootReducer;
