import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
describe("Dashboard Component", () => {
    it("should render the dashboard welcome section", () => {
        render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        expect(
            screen.getByText("👋 Welcome to CodePilot AI")
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                /Your personal AI assistant for programming/i
            )
        ).toBeInTheDocument();
    });
    it("should render all statistics", () => {
        render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        expect(
            screen.getByText("AI Tools")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Languages")
        ).toBeInTheDocument();
        expect(
            screen.getAllByText("Projects").length
        ).toBeGreaterThan(0);
        expect(
            screen.getByText("AI Powered")
        ).toBeInTheDocument();
        expect(
            screen.getByText("6+")
        ).toBeInTheDocument();
        expect(
            screen.getByText("5+")
        ).toBeInTheDocument();
        expect(
            screen.getByText("2")
        ).toBeInTheDocument();
        expect(
            screen.getByText("100%")
        ).toBeInTheDocument();
    });
    it("should render Quick Actions", () => {
        render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        expect(
            screen.getByText("⚡ Quick Actions")
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", {
                name: /Explain Code/i
            })
        ).toHaveAttribute("href", "/explain");
        expect(
            screen.getByRole("link", {
                name: /Debugger/i
            })
        ).toHaveAttribute("href", "/debugger");
        expect(
            screen.getByRole("link", {
                name: /Code Generator/i
            })
        ).toHaveAttribute("href", "/generator");
        expect(
            screen.getByRole("link", {
                name: /Projects/i
            })
        ).toHaveAttribute("href", "/projects");
    });
    it("should render the Daily Goal", () => {
        render(
            <MemoryRouter>
                <Dashboard />
            </MemoryRouter>
        );
        expect(
            screen.getByText("🎯 Daily Goal")
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                /Learn one new programming concept every day/i
            )
        ).toBeInTheDocument();
    });
});