import React from "react";
import type { AppProps } from "next/app";
import store from "../store";
import { Provider } from "react-redux";

import "../index.scss";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;
