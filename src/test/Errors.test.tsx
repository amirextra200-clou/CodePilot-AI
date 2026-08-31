import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Errors from "../pages/Errors";
describe("Errors Component", () => {
    it("should render the page heading", () => {
        render(<Errors />);
        expect(
            screen.getByRole("heading", {
                name: /common programming errors/i
            })
        ).toBeInTheDocument();
    });
    it("should render the page description", () => {
        render(<Errors />);
        expect(
            screen.getByText(
                /understand common coding errors and learn how to fix them easily/i
            )
        ).toBeInTheDocument();
    });
    it("should render common programming errors", () => {
        render(<Errors />);
        expect(
            screen.getByText(
                /cannot read properties of undefined/i
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(/module not found/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/unexpected token/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/undefined variable/i)
        ).toBeInTheDocument();
    });
    it("should render error categories", () => {
        render(<Errors />);
        expect(
            screen.getAllByText("JavaScript")
        ).toHaveLength(2);
        expect(
            screen.getAllByText("React")
        ).toHaveLength(2);
        expect(
            screen.getByText("Programming")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Logic")
        ).toBeInTheDocument();
    });
    it("should render solutions", () => {
        render(<Errors />);
        expect(
            screen.getByText(
                /check if the value exists before using it/i
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                /check the import path, file name/i
            )
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                /declare the variable before using it/i
            )
        ).toBeInTheDocument();
    });
});