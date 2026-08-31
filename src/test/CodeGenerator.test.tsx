import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CodeGenerator from "../pages/CodeGenerator";
import { askAI } from "../services/ai";
import { saveHistory } from "../services/history";
vi.mock("../services/ai", () => ({
    askAI: vi.fn()
}));
vi.mock("../services/history", () => ({
    saveHistory: vi.fn()
}));
describe("CodeGenerator Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it("should render the Code Generator page", () => {
        render(<CodeGenerator />);
        expect(
            screen.getByText("⚡ AI Code Generator")
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Describe your idea and generate code with AI."
            )
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(
                "Example: Create a weather app with API integration"
            )
        ).toBeInTheDocument();
    });
    it("should show error when idea is empty", async () => {
        const user = userEvent.setup();
        render(<CodeGenerator />);
        const generateButton =
            screen.getByRole("button", {
                name: "⚡ Generate Code"
            });
        await user.click(generateButton);
        expect(
            screen.getByText(
                "⚠️ Please enter your project idea first."
            )
        ).toBeInTheDocument();
        expect(askAI).not.toHaveBeenCalled();
    });
    it("should generate code and save history", async () => {
        const user = userEvent.setup();
        vi.mocked(askAI).mockResolvedValue(
            "console.log('Hello World');"
        );
        render(<CodeGenerator />);
        const textarea =
            screen.getByPlaceholderText(
                "Example: Create a weather app with API integration"
            );
        await user.type(
            textarea,
            "Create a Hello World app"
        );
        await user.click(
            screen.getByRole("button", {
                name: "⚡ Generate Code"
            })
        );
        await waitFor(() => {
            expect(askAI).toHaveBeenCalledTimes(1);
        });
        expect(
            screen.getByText(
                "console.log('Hello World');"
            )
        ).toBeInTheDocument();
        expect(saveHistory).toHaveBeenCalledTimes(1);
        expect(saveHistory).toHaveBeenCalledWith(
            "Code Generator",
            "JavaScript: Create a Hello World app",
            "console.log('Hello World');"
        );
    });
    it("should clear the idea and generated code", async () => {
        const user = userEvent.setup();
        vi.mocked(askAI).mockResolvedValue(
            "console.log('Test');"
        );
        render(<CodeGenerator />);
        const textarea =
            screen.getByPlaceholderText(
                "Example: Create a weather app with API integration"
            );
        await user.type(
            textarea,
            "Create a test app"
        );
        await user.click(
            screen.getByRole("button", {
                name: "⚡ Generate Code"
            })
        );
        await waitFor(() => {
            expect(
                screen.getByText(
                    "console.log('Test');"
                )
            ).toBeInTheDocument();
        });
        await user.click(
            screen.getByRole("button", {
                name: "🗑 Clear"
            })
        );
        expect(textarea).toHaveValue("");
        expect(
            screen.queryByText(
                "console.log('Test');"
            )
        ).not.toBeInTheDocument();
    });
});
