/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { Provider } from "react-redux";
import store from "../../store";

describe("Header", () => {
    const ReduxProvider = ({ children, reduxStore }) => <Provider store={reduxStore}>{children}</Provider>;
    const wrapper = ({ children }) => <ReduxProvider reduxStore={store}>{children}</ReduxProvider>;

    beforeAll(() => {
        process.env.NODE_ENV = "test";
    });

    test("renders link", () => {
        render(<Header />, { wrapper });
        const linkElement = screen.getByText(/Начало/i);
        expect(linkElement).toBeInTheDocument();
    });
});
