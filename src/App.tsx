import React from 'react';
import styles from "./App.module.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {Header} from "./components";

function App() {
    return (
        <div className={styles.root}>
            <Header/>
            <main className="container">
                <h3>Hello World</h3>
            </main>
        </div>
    );
}

export default App;
