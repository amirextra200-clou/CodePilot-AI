import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../components/Footer";
describe("Footer Component", () => {
    it("should render the CodePilot AI branding", () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(
            screen.getByText("🚀 CodePilot AI")
        ).toBeInTheDocument();
    });
    it("should render the footer description", () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(
            screen.getByText(
                /Your AI Assistant for Programming/i
            )
        ).toBeInTheDocument();
    });
    it("should render Quick Links", () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(
            screen.getByText("Quick Links")
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", {
                name: /Explain Code/i
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
                name: /Learning/i
            })
        ).toBeInTheDocument();
    });
    it("should render Built With technologies", () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(
            screen.getByText("Built With")
        ).toBeInTheDocument();
        expect(
            screen.getByText("⚛ React")
        ).toBeInTheDocument();
        expect(
            screen.getByText("🟨 JavaScript")
        ).toBeInTheDocument();
        expect(
            screen.getByText("🤖 Groq AI")
        ).toBeInTheDocument();
        expect(
            screen.getByText("▲ Vercel")
        ).toBeInTheDocument();
    });
    it("should render copyright text", () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        expect(
            screen.getByText(
                "© 2026 CodePilot AI. All Rights Reserved."
            )
        ).toBeInTheDocument();
    });
});