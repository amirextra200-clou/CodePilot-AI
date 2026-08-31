import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Loading from "../components/Loading";
describe("Loading Component", () => {
    it("should show the loading message", () => {
        render(<Loading />);
        expect(
            screen.getByText("🤖 CodePilot AI is Thinking...")
        ).toBeInTheDocument();
        expect(
            screen.getByText(
                "Please wait while AI prepares your answer."
            )
        ).toBeInTheDocument();
    });
    it("should render the spinner", () => {
        const { container } = render(<Loading />);
        const spinner = container.querySelector(".spinner");
        expect(spinner).toBeInTheDocument();
    });
});