import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "../pages/Projects";
describe("Projects Component", () => {
    it("should render the page heading", () => {
        render(<Projects />);
        expect(
            screen.getByRole("heading", {
                name: /My Projects/i
            })
        ).toBeInTheDocument();
    });
    it("should render the page description", () => {
        render(<Projects />);
        expect(
            screen.getByText(
                /Explore my projects, technologies and development journey/i
            )
        ).toBeInTheDocument();
    });
    it("should render all projects", () => {
        render(<Projects />);
        expect(
            screen.getByRole("heading", {
                name: /AI Study Helper/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", {
                name: /CodePilot AI/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", {
                name: /Weather App/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", {
                name: /Portfolio Website/i
            })
        ).toBeInTheDocument();
        expect(
            screen.getByRole("heading", {
                name: /Chat Application/i
            })
        ).toBeInTheDocument();
    });
   it("should render correct project statuses", () => {
    render(<Projects />);

    expect(
        screen.getAllByText("🟢 Live", {
            exact: true
        })
    ).toHaveLength(2);

    expect(
        screen.getAllByText("🚧 Coming Soon", {
            exact: true
        })
    ).toHaveLength(3);
});
    it("should render In Development buttons for incomplete projects", () => {
        render(<Projects />);
        const buttons = screen.getAllByRole("button", {
            name: /In Development/i
        });
        expect(buttons).toHaveLength(3);
        buttons.forEach((button) => {
            expect(button).toBeDisabled();
        });
    });
    it("should render Live Demo and GitHub links for completed projects", () => {
        render(<Projects />);
        const liveLinks = screen.getAllByRole("link", {
            name: /Live Demo/i
        });
        const githubLinks = screen.getAllByRole("link", {
            name: /GitHub/i
        });
        expect(liveLinks).toHaveLength(2);
        expect(githubLinks).toHaveLength(2);
    });
    it("should render the correct CodePilot AI links", () => {
        render(<Projects />);
        const liveLinks = screen.getAllByRole("link", {
            name: /Live Demo/i
        });
        const githubLinks = screen.getAllByRole("link", {
            name: /GitHub/i
        });
        expect(liveLinks[1]).toHaveAttribute(
            "href",
            "https://code-pilot-ai-orpin.vercel.app"
        );
        expect(githubLinks[1]).toHaveAttribute(
            "href",
            "https://github.com/amirextra200-clou/CodePilot-AI"
        );
    });
});