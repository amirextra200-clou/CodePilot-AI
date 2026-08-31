import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import AIResponse from "../components/AIResponse";
describe("AIResponse Component", () => {
    it("should render the title and AI response", () => {
        render(
            <AIResponse
                title="🤖 Generated Code"
                response="Hello, this is an AI response."
            />
        );
        expect(
            screen.getByText("🤖 Generated Code")
        ).toBeInTheDocument();
        expect(
            screen.getByText("Hello, this is an AI response.")
        ).toBeInTheDocument();
    });
    it("should render the copy button", () => {
        render(
            <AIResponse
                title="Test Response"
                response="Test answer"
            />
        );
        expect(
            screen.getByRole("button", {
                name: "📋 Copy"
            })
        ).toBeInTheDocument();
    });
});