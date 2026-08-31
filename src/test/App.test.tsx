import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
it("should render the Navbar", () => {
render(<App />);

    expect(
        screen.getByRole("link", { name: /CodePilot AI/i })
    ).toBeInTheDocument();
});
it("should render the Home page", () => {
    window.history.pushState({}, "", "/");
    render(<App />);
    expect(
        screen.getByText(/The Ultimate AI Assistant for Developers/i)
    ).toBeInTheDocument();
});
it("should render the Explain Code page", () => {
window.history.pushState({}, "", "/explain");
render(<App />);
expect(
    screen.getByRole("heading", { name: /AI Code Explain/i })
).toBeInTheDocument();


});

it("should render the Debugger page", () => {
    window.history.pushState({}, "", "/debugger");
    render(<App />);
 expect(
        screen.getByText(/AI Debugger/i)
    ).toBeInTheDocument();
});
it("should render the Code Generator page", () => {
    window.history.pushState({}, "", "/generator");
    render(<App />);
    expect(
    screen.getByRole("heading", { name: /AI Code Generator/i })
).toBeInTheDocument();
});
it("should render the Learning page", () => {
    window.history.pushState({}, "", "/learning");
    render(<App />);
    expect(
        screen.getByText(/Programming Learning/i)
    ).toBeInTheDocument();
});
it("should render the Projects page", () => {
    window.history.pushState({}, "", "/Projects");
    render(<App />);
    expect(
        screen.getByRole("heading", { name: /My Projects/i })
    ).toBeInTheDocument();
});
it("should render the Errors page", () => {
    window.history.pushState({}, "", "/errors");
    render(<App />);
    expect(
        screen.getByText(/Common Programming Errors/i)
    ).toBeInTheDocument();
});
it("should render the Dashboard page", () => {
    window.history.pushState({}, "", "/dashboard");
    render(<App />);
    expect(
        screen.getAllByRole("link", { name: /Dashboard/i }).length
    ).toBeGreaterThan(0);
});
it("should render the History page", () => {
    window.history.pushState({}, "", "/history");
    render(<App />);
    expect(
        screen.getByRole("heading", { name: /AI History/i, level: 1 })
    ).toBeInTheDocument();
});
it("should render the Footer", () => {
    window.history.pushState({}, "", "/");
    render(<App />);
    expect(
        screen.getByRole("heading", { name: /Quick Links/i })
    ).toBeInTheDocument();
});

});
