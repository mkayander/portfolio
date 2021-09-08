import { applyMiddleware, compose, createStore, StoreEnhancer } from "redux";
import rootReducer from "../reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import landingNavigation from "../landingNavigation";
import logger from "redux-logger";
import thunk from "redux-thunk";

const enhancers: StoreEnhancer[] = [];

enhancers.push(devToolsEnhancer({ name: "MainDevTool" }));

const createConfiguredStore = (preloadedState = {}) =>
    createStore(rootReducer, preloadedState, compose(applyMiddleware(logger, thunk), ...enhancers));

const store = createConfiguredStore({ sections: landingNavigation });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
