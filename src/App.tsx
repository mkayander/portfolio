import React from 'react';
import styles from "./App.module.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {Header, Introduction} from "./components";

function App() {
    return (
        <div className={styles.root}>
            <Header/>
            <main>
                <Introduction/>
                <div className="container">
                    <h3>Hello World</h3>
                    <p>My name's Max</p>
                    <br/>
                </div>
            </main>
        </div>
    );
}

export default App;
