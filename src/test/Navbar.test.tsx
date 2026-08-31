import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
describe("Navbar Component", () => {
    it("should render the CodePilot AI logo", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(
            screen.getByText("🚀 CodePilot AI")
        ).toBeInTheDocument();
    });
    it("should render navigation links", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("link", { name: /Home/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /Explain/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /Debugger/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /Generator/i })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("link", { name: /History/i })
        ).toBeInTheDocument();
    });
    it("should render the search input", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        expect(
            screen.getByPlaceholderText("🔍 Search tools...")
        ).toBeInTheDocument();
    });
    it("should show search results when searching", async () => {
        const user = userEvent.setup();

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );
        const searchInput =
            screen.getByPlaceholderText("🔍 Search tools...");
        await user.type(searchInput, "debug");

        expect(
            screen.getByText("AI Debugger")
        ).toBeInTheDocument();
    });
});