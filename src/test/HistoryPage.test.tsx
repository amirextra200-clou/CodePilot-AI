import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HistoryPage from "../pages/HistoryPage";
describe("HistoryPage Component", () => {
    it("should render the page heading", () => {
        render(
            <MemoryRouter>
                <HistoryPage />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("heading", {
                level: 1,
                name: /AI History/i
            })
        ).toBeInTheDocument();
    });
    it("should render the page description", () => {
        render(
            <MemoryRouter>
                <HistoryPage />
            </MemoryRouter>
        );
        expect(
            screen.getByText(
                /view your previous AI questions and answers/i
            )
        ).toBeInTheDocument();
    });
    it("should render the History component", () => {
        render(
            <MemoryRouter>
                <HistoryPage />
            </MemoryRouter>
        );
        expect(
            screen.getByText(/No History Found/i)
        ).toBeInTheDocument();
    });
});