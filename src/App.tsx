import React from "react";
import styles from "./App.module.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Header } from "./components";
import { Introduction } from "./sections";

function App() {
    return (
        <div className={styles.root}>
            <Header />
            <main>
                <Introduction />
                <div id="about-me" className="container">
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <h3>Hello World</h3>
                    <p>My name's Max</p>
                    <br />
                </div>
            </main>
        </div>
    );
}

export default App;
