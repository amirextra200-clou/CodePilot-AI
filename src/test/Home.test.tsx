import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home";
describe("Home Component", () => {
    it("should render the CodePilot AI hero section", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("heading", {
                level: 1,
                name: /CodePilot AI/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                /The Ultimate AI Assistant for Developers/i
            )
        ).toBeInTheDocument();
    });
    it("should render the hero action buttons", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("button", {
                name: /Explain Code/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", {
                name: /Generate Code/i
            })
        ).toBeInTheDocument();
    });
    it("should render CodePilot AI statistics", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("heading", {
                level: 2,
                name: /CodePilot AI Stats/i
            })
        ).toBeInTheDocument();
        expect(screen.getByText("6+")).toBeInTheDocument();
        expect(screen.getByText("5+")).toBeInTheDocument();
        expect(screen.getByText("100%")).toBeInTheDocument();
    });
    it("should render developer tools", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("heading", {
                level: 2,
                name: /Developer Tools/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByText("Explain Code")
        ).toBeInTheDocument();
        expect(
            screen.getByText("AI Debugger")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Code Generator")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Project Ideas")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Learning")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Common Errors")
        ).toBeInTheDocument();
    });
    it("should render feature highlights", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(
            screen.getByText(/Fast AI Responses/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/Secure/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/Powered by Groq AI/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/Built with React/i)
        ).toBeInTheDocument();
    });
});