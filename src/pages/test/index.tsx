import React from "react";
import { GetStaticProps } from "next";

type TestPageProps = {
    value: number;
};

const Test: React.FC<TestPageProps> = ({ value }) => {
    return (
        <div className="container" style={{color: "black"}}>
            <h1>This is a NEST test page</h1>
            <p>{value}</p>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            value: "Hello Static World",
        },
    };
};

export default Test;
