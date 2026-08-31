import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExplainCode from "../pages/ExplainCode";
import { askAI } from "../services/ai";
import { saveHistory } from "../services/history";
import { MemoryRouter } from "react-router-dom";
vi.mock("../services/ai", () => ({
    askAI: vi.fn(),
}));
vi.mock("../services/history", () => ({
    saveHistory: vi.fn(),
}));
describe("ExplainCode Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it("should render the page correctly", () => {
        render(
            <MemoryRouter>
                <ExplainCode />
            </MemoryRouter>
        );
        expect(
            screen.getByRole("heading", {
                name: /AI Code Explain/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(
                /Paste your code here/i
            )
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", {
                name: /Explain Code/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("button", {
                name: /Clear/i
            })
        ).toBeInTheDocument();
    });
    it("should show error when code is empty", async () => {
        const user = userEvent.setup();
        render(
            <MemoryRouter>
                <ExplainCode />
            </MemoryRouter>
        );
        const explainButton = screen.getByRole(
            "button",
            {
                name: /Explain Code/i
            }
        );
        await user.click(explainButton);
        expect(
            screen.getByText(
                "⚠️ Please paste your code first."
            )
        ).toBeInTheDocument();
        expect(askAI).not.toHaveBeenCalled();
    });
    it("should explain code and save history", async () => {
        const user = userEvent.setup();
        vi.mocked(askAI).mockResolvedValue(
            "This code prints Hello World."
        );
        render(
            <MemoryRouter>
                <ExplainCode />
            </MemoryRouter>
        );
        const textarea = screen.getByPlaceholderText(
            /Paste your code here/i
        );
        await user.type(
            textarea,
            "console.log('Hello World');"
        );
        const explainButton = screen.getByRole(
            "button",
            {
                name: /Explain Code/i
            }
        );
        await user.click(explainButton);
        await waitFor(() => {
            expect(askAI).toHaveBeenCalled();
        });
        expect(
            screen.getByText(
                "This code prints Hello World."
            )
        ).toBeInTheDocument();
        expect(saveHistory).toHaveBeenCalledWith(
            "Code Explanation",
            "console.log('Hello World');",
            "This code prints Hello World."
        );
    });
    it("should clear code, answer and error", async () => {
        const user = userEvent.setup();
        render(
            <MemoryRouter>
                <ExplainCode />
            </MemoryRouter>
        );
        const textarea = screen.getByPlaceholderText(
            /Paste your code here/i
        );
        await user.type(
            textarea,
            "console.log('Hello');"
        );
        expect(textarea).toHaveValue(
            "console.log('Hello');"
        );
        const clearButton = screen.getByRole(
            "button",
            {
                name: /Clear/i
            }
        );
        await user.click(clearButton);
        expect(textarea).toHaveValue("");
    });
});