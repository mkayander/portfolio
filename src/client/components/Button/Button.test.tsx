import React from "react";
import Button from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
    test("renders with text as button", () => {
        render(<Button text="Click me!" />);
        const element = screen.getByText("Click me!").closest("button");
        expect(element).toBeInTheDocument();
    });

    test("renders with text as link", () => {
        render(<Button text="Click me!" links={[{ url: "google.com" }]} />);
        const element = screen.getByText("Click me!").closest("a");
        expect(element).toBeInTheDocument();
    });
});
