import { compose, createStore, StoreEnhancer } from "redux";
import rootReducer from "../reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import landingNavigation from "../landingNavigation";

const enhancers: StoreEnhancer[] = [];

enhancers.push(devToolsEnhancer({ name: "MainDevTool" }));

const createConfiguredStore = (preloadedState = {}) => createStore(rootReducer, preloadedState, compose(...enhancers));

const store = createConfiguredStore({ sections: landingNavigation });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
