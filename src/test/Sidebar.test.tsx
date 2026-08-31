import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
describe("Sidebar Component", () => {
    it("should render the CodePilot AI heading", () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );
        expect(
            screen.getByText("🚀 CodePilot AI")
        ).toBeInTheDocument();
    });
    it("should render Developer Tools heading", () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );
        expect(
            screen.getByText("🛠 Developer Tools")
        ).toBeInTheDocument();
    });
    it("should render developer tool links", () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("link", {
                name: /Dashboard/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", {
                name: /Code Explain/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", {
                name: /Debugger/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", {
                name: /Code Generator/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", {
                name: /Projects/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", {
                name: /Errors/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", {
                name: /History/i
            })
        ).toBeInTheDocument();
    });
    it("should render Learning section and links", () => {
        render(
            <MemoryRouter>
                <Sidebar />
            </MemoryRouter>
        );
        expect(
            screen.getByText("📚 Learning")
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", {
                name: /HTML \/ CSS \/ JavaScript/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", {
                name: /React/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", {
                name: /PHP/i
            })
        ).toBeInTheDocument();
    });
});