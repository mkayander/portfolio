import { combineReducers } from "redux";
import sectionReducer from "./sectionReducer";

const rootReducer = combineReducers({ sections: sectionReducer });

export default rootReducer;
