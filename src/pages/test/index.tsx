import React from "react";
import { GetStaticProps } from "next";
import axios from "axios";

type TestPageProps = {
    value: number;
};

const Test: React.FC<TestPageProps> = ({ value }) => {
    return (
        <div className="container" style={{ color: "black" }}>
            <h1>This is a NEST test page</h1>
            <p>{value}</p>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get("https://api.chucknorris.io/jokes/random");
    return {
        props: {
            value: res.data.value,
        },
    };
};

export default Test;
