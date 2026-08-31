import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Debugger from "../pages/Debugger";
import { askAI } from "../services/ai";
import { saveHistory } from "../services/history";
vi.mock("../services/ai", () => ({
    askAI: vi.fn()
}));
vi.mock("../services/history", () => ({
    saveHistory: vi.fn()
}));
describe("Debugger Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it("should render the Debugger page", () => {
        render(<Debugger />);
        expect(
            screen.getByText("🐞 AI Debugger")
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                /Paste your error and let AI explain the problem/i
            )
        ).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText(
                "Paste your error message here..."
            )
        ).toBeInTheDocument();
    });
    it("should show alert when error message is empty", async () => {
        const user = userEvent.setup();
        const alertMock = vi
            .spyOn(window, "alert")
            .mockImplementation(() => {});
        render(<Debugger />);
        await user.click(
            screen.getByRole("button", {
                name: "🔍 Debug with AI"
            })
        );
        expect(alertMock).toHaveBeenCalledWith(
            "⚠ Please enter an error message first."
        );
        expect(askAI).not.toHaveBeenCalled();
        alertMock.mockRestore();
    });
    it("should fix the error and save history", async () => {
        const user = userEvent.setup();
        vi.mocked(askAI).mockResolvedValue(
            "The variable is not defined. Declare it before using it."
        );
        render(<Debugger />);
        const textarea =
            screen.getByPlaceholderText(
                "Paste your error message here..."
            );
        await user.type(
            textarea,
            "ReferenceError: x is not defined"
        );
        await user.click(
            screen.getByRole("button", {
                name: "🔍 Debug with AI"
            })
        );
        await waitFor(() => {
            expect(askAI).toHaveBeenCalledWith(
                "ReferenceError: x is not defined"
            );
        });
        expect(
            screen.getByText(
                "The variable is not defined. Declare it before using it."
            )
        ).toBeInTheDocument();
        expect(saveHistory).toHaveBeenCalledWith(
            "Debugger",
            "ReferenceError: x is not defined",
            "The variable is not defined. Declare it before using it."
        );
    });

    it("should clear the error and solution", async () => {
        const user = userEvent.setup();
        vi.mocked(askAI).mockResolvedValue(
            "Declare the variable before using it."
        );
        render(<Debugger />);
        const textarea =
            screen.getByPlaceholderText(
                "Paste your error message here..."
            );
        await user.type(
            textarea,
            "ReferenceError: x is not defined"
        );
        await user.click(
            screen.getByRole("button", {
                name: "🔍 Debug with AI"
            })
        );
        await waitFor(() => {
            expect(
                screen.getByText(
                    "Declare the variable before using it."
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
                "Declare the variable before using it."
            )
        ).not.toBeInTheDocument();
    });
});