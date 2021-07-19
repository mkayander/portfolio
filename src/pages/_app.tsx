import React from "react";
import type { AppProps } from "next/app";
import createConfiguredStore from "../store";
import landingNavigation from "../landingNavigation";
import { Provider } from "react-redux";

import "../index.scss";

const store = createConfiguredStore({ sections: landingNavigation });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;
