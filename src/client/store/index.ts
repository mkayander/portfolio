import { compose, createStore, StoreEnhancer } from "redux";
import rootReducer from "../reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

const enhancers: StoreEnhancer[] = [];

enhancers.push(devToolsEnhancer({ name: "MainDevTool" }));

const createConfiguredStore = (preloadedState = {}) => createStore(rootReducer, preloadedState, compose(...enhancers));

export default createConfiguredStore;
